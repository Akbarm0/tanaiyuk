import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    setImageUrl('');

    try {
      const res = await axios.post("https://tanaiyuk-backend.up.railway.app/generate-image", { prompt });
      setImageUrl(res.data.imageUrl);
    } catch (err) {
      alert("Gagal generate gambar");
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <h1>TanAIyuk 🎨</h1>
      <input
        type="text"
        placeholder="Tanya, misalnya: Gambar kucing main gitar"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage} disabled={loading}>
        {loading ? "Menggambar..." : "Tanya"}
      </button>

      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Hasil AI" width="300" />
        </div>
      )}
    </div>
  );
}

export default App;
