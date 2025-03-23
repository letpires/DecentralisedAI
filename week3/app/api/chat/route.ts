import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';


export async function POST(req: Request) {
  try {

    const { messages } = await req.json();


    const openai = createOpenAI({
      baseURL: "http://127.0.0.1:5000/v1",
    });
    console.log(messages)

    const result = streamText({
      model: openai('gpt-3.5-turbo'),
      messages: [
      {
        role: "system",
        content: `You are a professional storyteller who has been hired to write a series of short stories for a new anthology. The stories should be captivating, imaginative, and thought-provoking. They should explore a variety of themes and genres, from science fiction and fantasy to mystery and romance. Each story should be unique and memorable, with compelling characters and unexpected plot twists.`,
      },
      ...messages,
      {
        role: "user",
        content: "After the story, please summarize each character's role in the plot.",
      },
      ],
    });
    console.log(result)

    return result.toDataStreamResponse();
  } catch (e) {
    console.log(e)
    return new Response("Internal server error", { status: 500 });
  }
}






