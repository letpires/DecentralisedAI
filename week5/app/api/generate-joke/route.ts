import { NextResponse } from 'next/server';
import { OnchainInferenceService } from '@/app/services/onchain-inference';
import { TokenPaymentService } from '@/app/services/token-payment-service';

const inferenceService = new OnchainInferenceService();
const tokenService = new TokenPaymentService();

export async function POST(req: Request) {
  try {
    const { topic, tone, type } = await req.json();

    if (!topic || !tone || !type) {
      return NextResponse.json(
        { error: 'Topic, tone, and type are required' },
        { status: 400 }
      );
    }

    // Process payment with tokens
    try {
      await tokenService.payForJoke();
    } catch (paymentError) {
      return NextResponse.json(
        { error: 'Payment failed. Please check your token balance.' },
        { status: 402 }
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