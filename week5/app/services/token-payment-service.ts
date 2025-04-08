import { ethers } from 'ethers';

const TOKEN_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function buyTokens() payable",
  "function decimals() view returns (uint8)"
];

const PAYMENT_ABI = [
  "function payForJoke() returns (bool)",
  "function jokePrice() view returns (uint256)"
];

export class TokenPaymentService {
  private provider: ethers.JsonRpcProvider;
  private wallet: ethers.Wallet;
  private tokenContract: ethers.Contract;
  private paymentContract: ethers.Contract;

  constructor() {
    // Set Sepolia as default network
    const DEFAULT_SEPOLIA_RPC = 'https://rpc.sepolia.org';
    const SEPOLIA_CHAIN_ID = 11155111;
    
    // Initialize provider with Sepolia network (v6 syntax)
    const rpcUrl = process.env.RPC_URL || DEFAULT_SEPOLIA_RPC;
    this.provider = new ethers.JsonRpcProvider(rpcUrl, {
      chainId: SEPOLIA_CHAIN_ID,
      name: 'sepolia'
    });

    // Initialize wallet with private key (v6 syntax)
    this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, this.provider);
    
    // Replace with your deployed contract addresses
    const TOKEN_CONTRACT_ADDRESS = process.env.TOKEN_CONTRACT_ADDRESS!;
    const PAYMENT_CONTRACT_ADDRESS = process.env.PAYMENT_CONTRACT_ADDRESS!;
    
    this.tokenContract = new ethers.Contract(
      TOKEN_CONTRACT_ADDRESS,
      TOKEN_ABI,
      this.wallet
    );
    
    this.paymentContract = new ethers.Contract(
      PAYMENT_CONTRACT_ADDRESS,
      PAYMENT_ABI,
      this.wallet
    );
  }

  async buyTokens(amountInEth: string): Promise<string> {
    const tx = await this.tokenContract.buyTokens({
      value: ethers.parseEther(amountInEth) // v6 syntax
    });
    const receipt = await tx.wait();
    return receipt.hash; // v6 uses .hash instead of .transactionHash
  }

  async getTokenBalance(): Promise<string> {
    const decimals = await this.tokenContract.decimals();
    const balance = await this.tokenContract.balanceOf(this.wallet.address);
    return ethers.formatUnits(balance, decimals); // v6 syntax
  }

  async getJokePrice(): Promise<string> {
    const price = await this.paymentContract.jokePrice();
    return price.toString();
  }

  async approveTokens(): Promise<string> {
    // Get joke price
    const jokePrice = await this.paymentContract.jokePrice();
    
    // Approve payment contract to spend tokens
    const tx = await this.tokenContract.approve(
      this.paymentContract.address,
      jokePrice
    );
    const receipt = await tx.wait();
    return receipt.hash; // v6 uses .hash instead of .transactionHash
  }

  async payForJoke(): Promise<boolean> {
    // First approve tokens
    await this.approveTokens();
    
    // Then pay for joke
    const tx = await this.paymentContract.payForJoke();
    await tx.wait();
    return true;
  }
}
