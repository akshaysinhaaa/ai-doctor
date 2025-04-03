import { Message } from "ai/react";
import { Pinecone } from "@pinecone-database/pinecone";
import { queryPineconeVectorStore } from "@/utils";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { StreamData, streamText } from "ai";
import { LanguageModelV1 } from "@ai-sdk/provider";
import { NextResponse } from "next/server";  // ✅ Correct import

const google = createGoogleGenerativeAI({
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
  apiKey: process.env.GEMINI_API_KEY!,
});

// Create the model with default configuration
const model = google("gemini-1.5-pro-latest");

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

export async function POST(req: Request) {  // ❌ Removed 'res' argument
  try {
    const reqBody = await req.json();
    console.log(reqBody);

    const messages: Message[] = reqBody.messages;
    const userQuestion = messages[messages.length - 1].content;
    const reportData = reqBody.data.reportData;

    const searchQuery = `Represent this for searching relevant passages: patient medical report says: \n${reportData} \n\n ${userQuestion}`;
    const retrievals = await queryPineconeVectorStore(pc, "medic", "testspace", searchQuery);

    // Final prompt to Gemini API
    const finalPrompt = `Here is a summary of a patient's clinical report, and a user query. Some generic clinical findings are also provided that may or may not be relevant for the report.
    Go through the clinical report and answer the user query.
    Ensure the response is factually accurate, and demonstrates a thorough understanding of the query topic and the clinical report.
    Before answering you may enrich your knowledge by going through the provided clinical findings. 
    The clinical findings are generic insights and not part of the patient's medical report. Do not include any clinical finding if it is not relevant for the patient's case.

    \n\n**Patient's Clinical report summary:** \n${reportData}. 
    \n**end of patient's clinical report** 

    \n\n**User Query:**\n${userQuestion}?
    \n**end of user query** 

    \n\n**Generic Clinical findings:**
    \n\n${retrievals}. 
    \n\n**end of generic clinical findings** 

    \n\nProvide thorough justification for your answer.
    \n\n**Answer:**`;

    // Stream response from Gemini
    const data = new StreamData();
    data.append({
      retrievals: retrievals,
    });

    const result = await streamText({
      model: model as unknown as LanguageModelV1,
      prompt: finalPrompt,
      onFinish() {
        data.close();
      },
    });

    return result.toDataStreamResponse({ data });  // ✅ Return correct response
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });  // ✅ Handle errors properly
  }
}
