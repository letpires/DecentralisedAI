import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { characters, genre, tone } = await request.json();
    
    if (!characters || !Array.isArray(characters) || characters.length === 0) {
      return NextResponse.json(
        { error: 'At least one character is required' },
        { status: 400 }
      );
    }

    if (!genre || !tone) {
      return NextResponse.json(
        { error: 'Genre and tone are required' },
        { status: 400 }
      );
    }

    // Create a detailed prompt with character information
    const charactersInfo = characters
      .map(char => `
Character: ${char.name}
Description: ${char.description}
Personality: ${char.personality}`)
      .join('\n\n');

    const prompt = `You are a creative storyteller. Create an engaging story with the following parameters:

Genre: ${genre}
Tone: ${tone}

Using these characters:
${charactersInfo}

Create a compelling story that:
1. Incorporates all the provided characters naturally
2. Matches the specified genre and tone
3. Stays true to each character's description and personality
4. Has a clear beginning, middle, and end
5. Is approximately 500-1000 words long

The story should be well-structured and engaging, making good use of the characters' traits and personalities.

Return the response in this JSON format:
{
  "story": {
    "title": "The story title",
    "content": "The full story content"
  }
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a creative storyteller that generates engaging stories based on provided characters and parameters."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.8,
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      throw new Error('No content received from OpenAI');
    }

    const result = JSON.parse(content);
    
    if (!result.story || !result.story.title || !result.story.content) {
      console.error('Invalid story format from OpenAI');
      return NextResponse.json(
        { error: 'Invalid story format from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error generating story:', error);
    return NextResponse.json(
      { error: 'Failed to generate story' },
      { status: 500 }
    );
  }
} 