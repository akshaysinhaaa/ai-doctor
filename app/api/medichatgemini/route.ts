export async function POST(req:Request, res:Response){
    const reqBody = await req.json();
    console.log(reqBody);

    return new Response("Success", {status: 200});
}