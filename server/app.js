const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const cors = require("cors")

const db = new sqlite3.Database('./mydb.sqlite');


db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_name TEXT,
  phone_number TEXT,
  car_number TEXT
)`);


app.use(express.json());


app.post('/users', (req, res) => {
  const { user_name, phone_number, car_number } = req.body;

  const sql = `INSERT INTO users (user_name, phone_number, car_number) VALUES (?, ?, ?)`;
  const values = [user_name, phone_number, car_number];

  db.run(sql, values, function(err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to create user' });
    } else {
      console.log(`Created user with ID ${this.lastID}`);
      res.status(201).json({ id: this.lastID });
    }
  });
});


app.get('/users', (req, res) => {
  const sql = `SELECT * FROM users`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Failed to get users' });
    } else {
      res.status(200).json(rows);
    }
  });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
