import { ethers } from 'ethers';

// Prompt contract ABI
const PROMPT_ABI = [
    "function estimateFee(uint256 modelId) external view returns (uint256)",
    "function calculateAIResult(uint256 modelId, string memory prompt) external payable",
    "function prompt(uint256 modelId, string memory prompt) external view returns (string memory)"
];

export class OnchainInferenceService {
    private provider: ethers.providers.JsonRpcProvider;
    private wallet: ethers.Wallet;
    private promptContract: ethers.Contract;

    constructor() {
        // Set Sepolia as default network
        const DEFAULT_SEPOLIA_RPC = 'https://rpc.sepolia.org';
        const SEPOLIA_CHAIN_ID = 11155111;
        
        // Initialize provider with Sepolia network
        const rpcUrl = process.env.RPC_URL || DEFAULT_SEPOLIA_RPC;
        this.provider = new ethers.providers.JsonRpcProvider(rpcUrl, {
            name: 'sepolia',
            chainId: SEPOLIA_CHAIN_ID,
            ensAddress: '0x0000000000000000000000000000000000000000'
        });

        // Log network configuration
        console.log('Network Configuration:');
        console.log('- RPC URL:', rpcUrl);
        console.log('- Chain ID:', SEPOLIA_CHAIN_ID);
        console.log('- Network Name: sepolia');

        // Initialize wallet with private key
        this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, this.provider);
        console.log('- Wallet Address:', this.wallet.address);

        // Initialize Prompt contract with Sepolia address
        const PROMPT_CONTRACT_ADDRESS = '0xe75af5294f4CB4a8423ef8260595a54298c7a2FB';
        this.promptContract = new ethers.Contract(
            PROMPT_CONTRACT_ADDRESS,
            PROMPT_ABI,
            this.wallet
        );
        console.log('- Contract Address:', PROMPT_CONTRACT_ADDRESS);
    }

    async generateJoke(topic: string, tone: string, type: string): Promise<{ joke: string, evaluation: string }> {
        const prompt = `Create a joke with the following parameters:
Type: ${type}
Tone: ${tone}
Topic: ${topic}

Create a joke that:
1. Is creative and engaging
2. Matches the specified type and tone
3. Is appropriate for a general audience
4. Is concise and punchy`;

        try {
            // Estimate fee for model ID 11
            const fee = await this.promptContract.estimateFee(11);
            console.log('Estimated fee:', fee.toString());

            // Calculate AI result with the estimated fee
            const tx = await this.promptContract.calculateAIResult(11, prompt, {
                value: fee
            });
            console.log('Transaction hash:', tx.hash);

            // Wait for transaction to be mined
            await tx.wait();
            console.log('Transaction confirmed');

            // Wait a bit for the callback to be executed
            await new Promise(resolve => setTimeout(resolve, 30000));

            // Get the result
            const result = await this.promptContract.prompt(11, prompt);
            console.log('Result received');

            // Evaluate the joke
            const evalPrompt = `Evaluate this joke: "${result}"

            Provide evaluation in the following format:
            Humor level: [Funny, Somewhat funny, Not funny]
            Appropriateness: [Appropriate, Borderline, Inappropriate]
            Offensiveness: [Not offensive, Mildly offensive, Offensive]`;

            // Estimate fee for evaluation
            const evalFee = await this.promptContract.estimateFee(11);
            console.log('Estimated evaluation fee:', evalFee.toString());

            // Calculate evaluation result
            const evalTx = await this.promptContract.calculateAIResult(11, evalPrompt, {
                value: evalFee
            });
            console.log('Evaluation transaction hash:', evalTx.hash);

            // Wait for transaction to be mined
            await evalTx.wait();
            console.log('Evaluation transaction confirmed');

            // Wait a bit for the callback to be executed
            await new Promise(resolve => setTimeout(resolve, 30000));

            // Get the evaluation result
            const evalResult = await this.promptContract.prompt(11, evalPrompt);
            console.log('Evaluation result received');

            return {
                joke: result,
                evaluation: evalResult
            };
        } catch (error) {
            console.error('Error generating joke with onchain inference:', error);
            throw new Error('Failed to generate joke');
        }
    }
} 