const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// --- Configuration (edit these for your setup) ---
const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASSWORD = 'Root@123'; // <-- change this
const DB_NAME = 'weatherapp';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Register
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  console.log('Register request body:', req.body);
  
  db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(400).json({ error: 'User already exists' });
    }
    console.log('User inserted:', result);
    res.json({ success: true });
  });
});

// Login (simple password comparison)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const user = results[0];
    res.json({ success: true, email: user.email });
  });
});

// Dashboard (no auth, not secure)
app.get('/api/dashboard', (req, res) => {
  // No authentication check
  res.json({
    message: 'Welcome!',
    weather: { temp: 25, humidity: 60, forecast: 'Sunny' }
  });
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));