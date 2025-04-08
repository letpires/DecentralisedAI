// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract JokePaymentToken is Ownable {
    IERC20 public jokeToken;
    uint256 public jokePrice; // Price in JokeTokens
    
    event JokePurchased(address indexed user, uint256 price);
    
    constructor(address _tokenAddress, uint256 _initialPrice) 
        Ownable(msg.sender) 
    {
        jokeToken = IERC20(_tokenAddress);
        jokePrice = _initialPrice;
    }
    
    // Pay for joke generation with JokeTokens
    function payForJoke() external returns (bool) {
        require(jokeToken.balanceOf(msg.sender) >= jokePrice, "Insufficient tokens");
        
        // Transfer tokens from user to contract
        bool transferred = jokeToken.transferFrom(msg.sender, address(this), jokePrice);
        require(transferred, "Token transfer failed");
        
        emit JokePurchased(msg.sender, jokePrice);
        return true;
    }
    
    // Update joke price (owner only)
    function setJokePrice(uint256 _newPrice) external onlyOwner {
        jokePrice = _newPrice;
    }
    
    // Withdraw tokens (owner only)
    function withdrawTokens() external onlyOwner {
        uint256 balance = jokeToken.balanceOf(address(this));
        require(balance > 0, "No tokens to withdraw");
        
        bool transferred = jokeToken.transfer(owner(), balance);
        require(transferred, "Token transfer failed");
    }
}