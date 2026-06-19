# Mini DEX - Final Internship Project

## Project Overview

Mini DEX is a decentralized exchange (DEX) application developed as part of a Blockchain Developer Internship project. The application enables users to connect their wallets, provide liquidity, perform token swaps, and interact with smart contracts deployed on the blockchain.

The project demonstrates core concepts of decentralized finance (DeFi), ERC20 token standards, liquidity pools, wallet integration, and smart contract interaction.

---

## Project Objectives

* Learn decentralized exchange architecture
* Implement ERC20 token contracts
* Develop a liquidity pool mechanism
* Enable token swapping functionality
* Integrate blockchain wallets with a frontend application
* Connect React frontend with Solidity smart contracts

---

## Technology Stack

### Blockchain

* Solidity
* OpenZeppelin Contracts
* Remix IDE

### Frontend

* React.js
* Vite
* Ethers.js

### Wallet

* MetaMask

---

## Project Structure

```text
mini-dex-final-project/
├── contracts/
│   ├── DevToken.sol
│   ├── RewardToken.sol
│   └── MiniDEX.sol
│
├── frontend/
│   ├── src/
│   │   ├── abi/
│   │   ├── components/
│   │   └── utils/
│   │
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
├── docs/
├── README.md
└── notes.txt
```

---

## Smart Contracts

### DevToken.sol

ERC20 token used as Token A within the exchange.

Features:

* ERC20 compliant
* Initial supply minted at deployment
* Used for liquidity provision
* Used for token swaps

Token Symbol:
DVT

---

### RewardToken.sol

ERC20 token used as Token B within the exchange.

Features:

* ERC20 compliant
* Initial supply minted at deployment
* Used for liquidity provision
* Used for token swaps

Token Symbol:
RWT

---

### MiniDEX.sol

Core exchange contract.

Functions Implemented:

```solidity
addLiquidity(uint256 amountA, uint256 amountB)

removeLiquidity(uint256 amountA, uint256 amountB)

swapAForB(uint256 amountA)

swapBForA(uint256 amountB)

getReserves()
```

Responsibilities:

* Manage liquidity pools
* Track token reserves
* Execute token swaps
* Allow liquidity addition and removal

---

## System Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
Ethers.js
 │
 ▼
MetaMask
 │
 ▼
MiniDEX Smart Contract
 │
 ├─────────────┐
 ▼             ▼
DevToken     RewardToken
(DVT)         (RWT)
```

---

## Development Progress

### Phase 1 – Requirement Analysis

Completed

Activities:

* DEX research
* Functional requirements identification
* Non-functional requirements documentation
* Use case analysis

Status:
Completed

---

### Phase 2 – System Architecture Design

Completed

Activities:

* Smart contract planning
* Workflow design
* Technical architecture preparation

Status:
Completed

---

### Phase 3 – Smart Contract Development

Completed

Contracts:

* DevToken.sol
* RewardToken.sol
* MiniDEX.sol

Status:
Completed

---

### Phase 4 – Frontend Setup

Completed

Activities:

* React project creation using Vite
* Ethers.js installation
* Project folder structure creation

Status:
Completed

---

### Phase 5 – Wallet Integration

In Progress

Activities:

* MetaMask integration
* Wallet connection functionality
* Account retrieval

Status:
In Progress

---

### Phase 6 – Smart Contract Integration

Pending

Planned Features:

* Display reserves
* Token approvals
* Add liquidity
* Remove liquidity
* Token swaps

Status:
Pending

---

## Current Features

Implemented:

* ERC20 token deployment
* DEX smart contract development
* React frontend initialization
* Ethers.js integration
* Wallet connection setup

---

## Upcoming Tasks

* Complete wallet integration
* Connect deployed smart contracts
* Display liquidity reserves
* Implement add liquidity functionality
* Implement remove liquidity functionality
* Implement token swapping interface
* Improve UI/UX
* Conduct testing
* Record demonstration video

---

## Learning Outcomes

Through this project, the following concepts have been explored:

* Solidity development
* ERC20 token implementation
* Decentralized exchange architecture
* Liquidity pools
* Smart contract interaction
* React frontend integration
* Ethers.js usage
* Wallet connectivity
* DeFi fundamentals

---

## Project Status

Current Progress: Approximately 65% Complete

Completed:

* Planning
* Architecture
* Smart Contracts
* Frontend Setup

In Progress:

* Wallet Integration

Pending:

* Smart Contract Interaction Layer
* UI Improvements
* Testing
* Deployment Documentation
* Final Demonstration


---

## Author

Devendra Yadav

Blockchain Developer Intern

2026
