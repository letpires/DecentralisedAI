import { NextResponse } from 'next/server';
import { TokenPaymentService } from '@/app/services/token-payment-service';

const tokenService = new TokenPaymentService();

export async function GET() {
  try {
    const balance = await tokenService.getTokenBalance();
    const jokePrice = await tokenService.getJokePrice();
    
    return NextResponse.json({ balance, jokePrice });

  } catch (error) {
    console.error('Error fetching balance:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch balance' }, 
      { status: 500 }
    );
  }
}