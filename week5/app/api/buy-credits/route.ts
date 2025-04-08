import { NextResponse } from 'next/server';
import { TokenPaymentService } from '@/app/services/token-payment-service';

const tokenService = new TokenPaymentService();

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    if (!amount) {
      return NextResponse.json(
        { error: 'Amount is required' },
        { status: 400 }
      );
    }

    const txHash = await tokenService.buyTokens(amount);
    
    return NextResponse.json({ success: true, txHash });

  } catch (error) {
    console.error('Error buying tokens:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to buy tokens' }, 
      { status: 500 }
    );
  }
}