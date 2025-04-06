import { NextResponse } from 'next/server';
import { OnchainInferenceService } from '@/app/services/onchain-inference';

const inferenceService = new OnchainInferenceService();

export async function POST(req: Request) {
  try {
    const { topic, tone, type } = await req.json();

    if (!topic || !tone || !type) {
      return NextResponse.json(
        { error: 'Topic, tone, and type are required' },
        { status: 400 }
      );
    }

    const { joke, evaluation } = await inferenceService.generateJoke(topic, tone, type);
    
    return NextResponse.json({ joke, evaluation });

  } catch (error) {
    console.error('Error generating joke:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate joke' }, 
      { status: 500 }
    );
  }
} 