import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
}));

app.get('/api/news', async (req, res) => {
  try {

    // Dynamically set the 'from' date to the last 30 days
    const date = new Date();
    date.setDate(date.getDate() - 30);
    const fromDate = date.toISOString().split('T')[0];

    const response = await axios.get(`https://newsapi.org/v2/everything?q=tesla&from=${fromDate}&sortBy=publishedAt&apiKey=${process.env.API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static frontend in production
if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "../newsApp/build");
  app.use(express.static(distPath));

  // Safe SPA fallback for non-API routes
  app.get(/^(?!\/api).*/, (req, res) => {
  const indexPath = path.join(distPath, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send("Frontend not built yet. Please run 'npm run build' in your frontend project.");
  }
});
}

// Catch-all error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
