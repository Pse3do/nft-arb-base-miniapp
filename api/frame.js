// Save this as: api/frame.js in your Vercel project

export default function handler(req, res) {
  const { img, name, chain } = req.query;
  
  const imageUrl = img || 'https://via.placeholder.com/800';
  const nftName = name || 'NFT';
  const chainName = chain || 'blockchain';
  
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${nftName} - Minted on ${chainName}</title>
  
  <!-- Farcaster Frame Meta Tags -->
  <meta property="fc:frame" content="vNext">
  <meta property="fc:frame:image" content="${imageUrl}">
  <meta property="fc:frame:image:aspect_ratio" content="1:1">
  <meta property="fc:frame:button:1" content="🎨 Create Yours">
  <meta property="fc:frame:button:1:action" content="link">
  <meta property="fc:frame:button:1:target" content="https://nft-arb-base-miniapp.vercel.app">
  
  <!-- Open Graph for regular sharing -->
  <meta property="og:title" content="${nftName} - Minted on ${chainName}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:description" content="Immortalize your memories onchain forever!">
  
  <style>
    body {
      font-family: sans-serif;
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      text-align: center;
    }
    img {
      max-width: 100%;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    h1 {
      color: #333;
      margin: 20px 0;
    }
    .button {
      display: inline-block;
      padding: 12px 32px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: bold;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>${nftName}</h1>
  <img src="${imageUrl}" alt="${nftName}">
  <p>Minted on ${chainName}</p>
  <a href="https://nft-arb-base-miniapp.vercel.app" class="button">🎨 Create Yours</a>
</body>
</html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}