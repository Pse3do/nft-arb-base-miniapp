export default function handler(req, res) {
  const { nftName, imageUrl, chain } = req.query;

  const meta = {
    version: "1",
    imageUrl: imageUrl || "https://nft-arb-base-miniapp.vercel.app/image.png",
    button: {
      title: "ONCHAIN YOUR MEMORY",
      action: {
        type: "launch_frame",
        name: nftName || "Snapshot",
        url: "https://nft-arb-base-miniapp.vercel.app",
        splashImageUrl: imageUrl || "https://nft-arb-base-miniapp.vercel.app/icon.png",
        splashBackgroundColor: "#2c67f2"
      }
    }
  };

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="fc:miniapp" content='${JSON.stringify(meta)}'>
</head>
<body>
</body>
</html>
  `);
}
