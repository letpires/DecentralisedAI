'use client';

import { useState } from 'react';
import { useTokenContext } from '../context/TokenContext';

export default function CreditPurchase() {
  const [amount, setAmount] = useState('0.01');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { balance, jokePrice, refreshBalance } = useTokenContext();

  async function buyTokens() {
    try {
      setIsLoading(true);
      const response = await fetch('/api/buy-credits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error);
      }
      
      setMessage(`Successfully purchased tokens! Transaction: ${data.txHash}`);
      refreshBalance();
    } catch (err) {
      setMessage(`Error: ${err instanceof Error ? err.message : 'Failed to purchase tokens'}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4 border rounded-lg mb-4 bg-white shadow-sm"> {/* Added bg-white shadow-sm */}
      <h2 className="text-xl font-semibold mb-2 text-black">JOKE Token Manager</h2> {/* Added text-black */}
      <p className="mb-2 text-black">Your balance: {balance} JOKE</p> {/* Added text-black */}
      <p className="mb-4 text-sm text-gray-600">Joke price: {jokePrice} JOKE tokens</p>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-grow p-2 border rounded text-black" // Add text-black for better contrast
          placeholder="ETH amount"
        />
        <button
          onClick={buyTokens}
          disabled={isLoading}
          className={`px-4 py-2 rounded ${isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium`} // Add font-medium
        >
          {isLoading ? 'Processing...' : 'Buy JOKE Tokens'}
        </button>
      </div>
      
      {message && (
        <div className="p-2 bg-gray-100 rounded-lg mt-2">
          {message}
        </div>
      )}
    </div>
  );
}