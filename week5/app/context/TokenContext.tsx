'use client';

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface TokenContextType {
  balance: string;
  jokePrice: string;
  refreshBalance: () => Promise<void>;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export function TokenProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState('0');
  const [jokePrice, setJokePrice] = useState('0');

  async function refreshBalance() {
    try {
      const response = await fetch('/api/get-credits');
      const data = await response.json();
      if (response.ok) {
        setBalance(data.balance);
        setJokePrice(data.jokePrice);
      }
    } catch (error) {
      console.error('Failed to fetch token balance', error);
    }
  }

  useEffect(() => {
    refreshBalance();
  }, []);

  return (
    <TokenContext.Provider value={{ balance, jokePrice, refreshBalance }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useTokenContext() {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error('useTokenContext must be used within a TokenProvider');
  }
  return context;
}