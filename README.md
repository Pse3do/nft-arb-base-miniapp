# NFT Minter - Farcaster Frame Mini App

A decentralized mini app built for Farcaster that allows users to mint NFTs directly from the frame. This project enables users to onchain their memories by creating NFTs across different blockchain networks.

## 🌟 Features

- 🖼️ NFT Minting Interface
- 🌓 Light/Dark Mode Support
- 🎨 Modern, Responsive Design
- 🔄 Farcaster Frame Integration
- 📱 Mobile-Optimized Interface
- 🔐 Secure NFT Creation

## 🛠️ Technology Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js (API Routes)
- Hosting: Vercel
- Frame Integration: Farcaster Protocol

## 📦 Project Structure

```
nft-arb-base-miniapp/
├── api/
│   └── frame.js          # Frame API handler
├── .well-known/         # Well-known directory
├── images/             
│   ├── arb.png
│   ├── base.png
│   ├── icon.png
│   ├── image.png
│   └── splash.png
└── index.html          # Main application interface
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/PavanKumarKR42/nft-arb-base-miniapp.git
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` to view the application

## 🎯 Usage

1. Open the mini app through Farcaster
2. Upload your image or memory
3. Configure your NFT properties
4. Choose your preferred blockchain network
5. Mint your NFT

## ⚙️ Configuration

The mini app supports various blockchain networks and can be configured through the frame API. The default configuration can be modified in `api/frame.js`.

## 📄 API Reference

### Frame API

```javascript
GET /api/frame
```

Query Parameters:
- `nftName`: Custom name for the NFT (optional)
- `imageUrl`: Custom image URL for the NFT (optional)
- `chain`: Blockchain network selection (optional)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
