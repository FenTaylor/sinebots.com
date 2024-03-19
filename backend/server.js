const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

// Подключение к базе данных
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  database: 'sinebot',
  port: 5432,
});

// Middleware
app.use(cors());
app.use(express.json());

// Роут для регистрации
app.post('/register', (req, res) => {
  const { email, password, name } = req.body;
  pool.query(
    'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id',
    [email, password, name],
    (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(201).json({ id: results.rows[0].id });
    }
  );
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    pool.query(
      'SELECT * FROM users WHERE email = $1 AND password = $2',
      [email, password],
      (error, results) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }
        if (results.rows.length > 0) {
          res.json({ message: 'Успешный вход', userId: results.rows[0].id });
        } else {
          res.status(401).json({ message: 'Неверный email или пароль' });
        }
      }
    );
  });  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
