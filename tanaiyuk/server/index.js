const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/generate", async (req, res) => {
  const prompt = req.body.prompt;

  // Simulasi respons AI image (karena belum ada API sebenarnya)
  const fakeImageUrl = `https://dummyimage.com/600x400/000/fff&text=${encodeURIComponent(prompt)}`;

  res.json({ imageUrl: fakeImageUrl });
});

app.listen(port, () => {
  console.log(`TanAIyuk server berjalan di http://localhost:${port}`);
});
