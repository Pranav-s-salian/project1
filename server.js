import express from 'express';
import cors from 'cors';
import { chromium } from 'playwright';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let latestCommand = null;

// Accept command from AI server
app.post('/command', (req, res) => {
  latestCommand = req.body.command;
  res.json({ status: 'ok', command: latestCommand });
});

// Frontend polls this to get the latest command
app.get('/command', (req, res) => {
  res.json({ command: latestCommand });
  latestCommand = null; // Clear the command after sending it
});

app.get('/screen', async (req, res) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173');
  const screenshotBuffer = await page.screenshot({ fullPage: true });
  await browser.close();
  res.set('Content-Type', 'image/png');
  res.send(screenshotBuffer);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});