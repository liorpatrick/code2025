import express from 'express';import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173', credentials: false }));
app.use(express.json());

app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'Auth API running (MySQL)' });
});

const port = process.env.PORT || 5000;

async function start() {
  try {
    await pool.query('SELECT 1');
    console.log('MySQL connected');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
}

start();
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173', credentials: false }));
app.use(express.json());

app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'Auth API running (MySQL)' });
});

const port = process.env.PORT || 5000;

async function start() {
  try {
    await pool.query('SELECT 1');
    console.log('MySQL connected');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error('MySQL connection error:', err);
    process.exit(1);
  }
}

start();
