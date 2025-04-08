const { ethers } = require("hardhat");

async function main() {
  // For ethers v6:
  const initialSupply = 1000000; // 1 million tokens
  const tokenPrice = ethers.parseEther("0.0001"); // 0.0001 ETH per token
  
  // Deploy JokeToken
  const JokeToken = await ethers.getContractFactory("JokeToken");
  const jokeToken = await JokeToken.deploy(initialSupply, tokenPrice);
  await jokeToken.waitForDeployment();
  
  console.log("JokeToken deployed to:", await jokeToken.getAddress());
  
  // Deploy JokePaymentToken
  const jokePrice = 10; // 10 JOKE tokens per joke
  const JokePaymentToken = await ethers.getContractFactory("JokePaymentToken");
  const jokePayment = await JokePaymentToken.deploy(await jokeToken.getAddress(), jokePrice);
  await jokePayment.waitForDeployment();
  
  console.log("JokePaymentToken deployed to:", await jokePayment.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });