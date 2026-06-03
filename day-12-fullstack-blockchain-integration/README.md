# Full-Stack Blockchain Integration DApp

## Project Overview

This project demonstrates the integration of a React frontend, Node.js backend, MongoDB database, MetaMask wallet, and an ERC20 smart contract deployed on the SCAI Mainnet network.

The objective of this project is to build a complete decentralized application (DApp) where users can register as interns, store their information in MongoDB, connect their blockchain wallet, and interact with a deployed ERC20 reward token.

---

## Features

* Intern Registration System
* REST API Development using Express.js
* MongoDB Database Integration
* React Frontend Interface
* MetaMask Wallet Connection
* ERC20 Smart Contract Deployment
* Smart Contract Interaction using Ethers.js
* Token Balance Retrieval
* Full-Stack Web3 Architecture

---

## Technology Stack

### Frontend

* React.js
* Axios
* Ethers.js

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Blockchain

* Solidity
* ERC20 Token Standard
* Remix IDE
* MetaMask
* SCAI Mainnet

---

## Project Structure

```text
day-10-fullstack-blockchain-integration/

├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── contract.js
│   │   └── App.js
│   └── package.json
│
├── README.md
├── notes.txt
└── screenshots/
```

---

## System Architecture

```text
React Frontend
      ↓
Axios
      ↓
Express Backend
      ↓
MongoDB Database

React Frontend
      ↓
MetaMask
      ↓
Ethers.js
      ↓
ERC20 Smart Contract
      ↓
SCAI Mainnet Blockchain
```

---

## Backend Setup

Navigate to backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install express mongoose cors dotenv
```

Run server:

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

Navigate to frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
npm install axios ethers
```

Start React application:

```bash
npm start
```

Application runs on:

```text
http://localhost:3000
```

---

## MongoDB Setup

Start MongoDB Service.

Verify connection using MongoDB Compass.

Database Name:

```text
internDapp
```

Collection:

```text
interns
```

---

## Smart Contract Deployment

Contract Type:

```text
ERC20 Token
```

Token Name:

```text
Intern Reward Token
```

Symbol:

```text
IRT
```

Deployment Platform:

```text
Remix IDE
```

Network:

```text
SCAI Mainnet
```

Wallet:

```text
MetaMask
```

---

## MetaMask Integration

The application connects to MetaMask using:

```javascript
window.ethereum.request({
  method: "eth_requestAccounts"
});
```

Users can:

* Connect Wallet
* View Wallet Address
* Interact with Smart Contract
* Read Token Balance

---

## API Endpoints

### Register Intern

```http
POST /api/interns
```

### Get All Interns

```http
GET /api/interns
```

---

## Learning Outcomes

Through this project I learned:

* React Frontend Development
* Backend API Development
* MongoDB Database Integration
* REST API Communication
* MetaMask Wallet Integration
* Smart Contract Deployment
* Ethers.js Usage
* ERC20 Token Standards
* Blockchain Interaction
* Full-Stack Web3 Application Architecture

---

## Results

Successfully integrated:

* Frontend
* Backend
* Database
* Wallet
* Smart Contract
* Blockchain Network

into a single working decentralized application.

---

## Future Improvements

* Token Minting Interface
* NFT Reward Certificates
* Role-Based Access Control
* Staking Functionality
* Transaction History Dashboard
* Admin Panel
* Smart Contract Event Tracking

---

## Author

Devendra

Web3 & Full-Stack Blockchain Development Internship Project
