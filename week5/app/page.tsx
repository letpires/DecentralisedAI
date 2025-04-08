import CreditPurchase from './components/CreditPurchase';
import JokeGenerator from './components/JokeGenerator';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Separate wrapper div for CreditPurchase */}
      <div className="w-full max-w-lg mb-4 bg-white"> {/* Added bg-white */}
        <CreditPurchase />
      </div>
      
      {/* Separate wrapper for JokeGenerator */}
      <div className="w-full max-w-lg">
        <JokeGenerator />
      </div>
    </main>
  );
}
