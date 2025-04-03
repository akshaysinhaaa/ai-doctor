import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
});

const prompt = `Attached is an image of a clinical report. 
Go over the the clinical report and identify biomarkers that show slight or large abnormalities. Then summarize in 100 words. You may increase the word limit if the report has multiple pages. Do not output patient name, date etc. Make sure to include numerical values and key details from the report, including report title.
## Summary: `;

export async function POST(req: NextRequest) {
    try {
        const { base64 } = await req.json();
        const filePart = fileToGenerativePart(base64);

        console.log(filePart);

        const generatedContent = await model.generateContent([prompt, filePart]);
        console.log(generatedContent);

        const textResponse = generatedContent.response?.candidates?.[0]?.content?.parts?.[0]?.text ?? "No response generated";

        return NextResponse.json({ summary: textResponse });
    } catch (error) {
        console.error("Error processing the request:", error);
        return NextResponse.json({ error: "Failed to generate report summary" }, { status: 500 });
    }
}

function fileToGenerativePart(imageData: string) {
    return {
        inlineData: {
            data: imageData.split(",")[1],
            mimeType: imageData.substring(
                imageData.indexOf(":") + 1,
                imageData.lastIndexOf(";")
            ),
        },
    };
}
