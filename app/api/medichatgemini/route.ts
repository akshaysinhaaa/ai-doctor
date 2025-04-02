import { Message } from "ai/react";
import { Pinecone } from '@pinecone-database/pinecone';
import { queryPineconeVectorStore } from "@/utils";

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });

export async function POST(req:Request, res:Response){
    const reqBody = await req.json();
    console.log(reqBody);
    const messages: Message[] = reqBody.messages;
    const userQuestion = messages[messages.length - 1].content;
    const reportData = reqBody.data.reportData;

    const searchQuery = `Represent this for searching relevant passages: patient medical report says: \n${reportData} \n\n ${userQuestion}`;
    const retrievals = await queryPineconeVectorStore(pc, 'medic', 'testspace', searchQuery)

    return new Response("Success", {status: 200});
}