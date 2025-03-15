import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { topic, tone, type, temperature } = await req.json();

    // Generate joke
    const jokeResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a professional comedian specialized in ${type} jokes. You excel at creating ${tone} humor.`
          },
          {
            role: 'user',
            content: `Create a ${type} joke about ${topic}. The joke should be creative, engaging, and match the ${tone} tone.`
          }
        ],
        max_tokens: 200,
        temperature,
      }),
    });

    if (!jokeResponse.ok) {
      throw new Error('Failed to generate joke');
    }

    const jokeData = await jokeResponse.json();
    
    if (!jokeData.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from OpenAI');
    }

    const joke = jokeData.choices[0].message.content.trim();

    // Evaluate joke
    const evalResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are an expert in analyzing humor and content appropriateness. 
            Evaluate jokes based on:
            1. Humor level (Funny, Somewhat funny, Not funny)
            2. Appropriateness (Appropriate, Borderline, Inappropriate)
            3. Potential offensiveness (Not offensive, Mildly offensive, Offensive)
            Provide your evaluation in a concise, comma-separated format.`
          },
          {
            role: 'user',
            content: `Evaluate this joke: "${joke}"`
          }
        ],
        max_tokens: 50,
        temperature: 0.3,
      }),
    });

    if (!evalResponse.ok) {
      throw new Error('Failed to evaluate joke');
    }

    const evalData = await evalResponse.json();
    
    if (!evalData.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from OpenAI evaluation');
    }

    const evaluation = evalData.choices[0].message.content.trim();

    return NextResponse.json({ joke, evaluation });

  } catch (error) {
    console.error('Error generating joke:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate joke' }, 
      { status: 500 }
    );
  }
}
