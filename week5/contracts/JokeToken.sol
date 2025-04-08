// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract JokeToken is ERC20, Ownable {
    // Token price in ETH
    uint256 public tokenPrice;
    
    constructor(uint256 initialSupply, uint256 _tokenPrice) 
        ERC20("JokeToken", "JOKE") 
        Ownable(msg.sender)
    {
        tokenPrice = _tokenPrice;
        // Mint initial supply to contract creator
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
    
    // Allow users to purchase tokens with ETH
    function buyTokens() external payable {
        require(msg.value > 0, "Must send ETH to buy tokens");
        uint256 tokenAmount = (msg.value * 10 ** decimals()) / tokenPrice;
        require(tokenAmount > 0, "ETH amount too small");
        
        // Transfer tokens from owner to buyer
        _transfer(owner(), msg.sender, tokenAmount);
    }
    
    // Update token price (only owner)
    function setTokenPrice(uint256 _newPrice) external onlyOwner {
        tokenPrice = _newPrice;
    }
    
    // Allow owner to withdraw ETH from token sales
    function withdrawETH() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No ETH to withdraw");
        (bool success, ) = owner().call{value: balance}("");
        require(success, "Withdrawal failed");
    }
}