import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { content } = await request.json();
    console.log('Received content length:', content.length);
    
    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    // Log a preview of the content
    console.log('Content preview:', content.substring(0, 200) + '...');

    const prompt = `You are a literary analysis assistant. Your task is to carefully analyze the following text and extract detailed information about all characters mentioned.

For each character you find, even minor ones, you must provide:
1. Their name (exactly as mentioned in the text)
2. A brief but specific description of their physical appearance and role in the story
3. Their personality traits and characteristics based on their actions and dialogue

You must return the information in this exact JSON format:
{
  "characters": [
    {
      "name": "Character's exact name",
      "description": "Physical description and role",
      "personality": "Personality traits and characteristics"
    }
  ]
}

Important:
- Include ALL characters mentioned in the text
- Use exact names and details from the text
- If no characters are found, return an empty array
- Ensure the response is valid JSON

Text to analyze:
${content}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a precise literary analysis assistant that extracts character information from texts and returns it in valid JSON format."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.5, // Add some determinism
    });

    // Log the raw response
    console.log('Raw OpenAI response:', completion.choices[0].message.content);

    const result = JSON.parse(completion.choices[0].message.content || '{"characters": []}');
    console.log('Parsed API Response:', result);

    if (!result.characters || !Array.isArray(result.characters)) {
      console.error('Invalid response format from OpenAI');
      return NextResponse.json(
        { error: 'Invalid response format from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error extracting characters:', error);
    return NextResponse.json(
      { error: 'Failed to extract characters' },
      { status: 500 }
    );
  }
} 