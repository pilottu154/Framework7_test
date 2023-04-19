const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./database.db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;

  db.run(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
    (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
