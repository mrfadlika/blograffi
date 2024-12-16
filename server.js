import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware untuk menangani CORS dan JSON parsing
app.use(cors());
app.use(express.json());

// Endpoint API untuk eksekusi kode
app.post('/api/execute', async (req, res) => {
  console.log('Request received at /api/execute:', req.body);

  try {
    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    console.log('JDoodle API Response Status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('JDoodle API Error:', errorText);
      return res.status(response.status).json({ error: errorText });
    }

    const data = await response.json();
    console.log('JDoodle Response Data:', data);
    res.json(data);
  } catch (error) {
    console.error('Error in /api/execute:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Middleware untuk file statis
app.use(express.static(join(__dirname, 'dist')));

// Fallback route untuk aplikasi frontend (HTML)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Menjalankan server pada port yang ditentukan
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
