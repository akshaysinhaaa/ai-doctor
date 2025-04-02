import { Pinecone } from "@pinecone-database/pinecone";
import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HUGGINGFACE_TOKEN);

export async function queryPineconeVectorStore(
    client: Pinecone,
    indexName: string,
    namespace: string,
    query: string
): Promise<string> {



    return "";
}