const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
});


db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);`, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Table "users" has been created.');
});


db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the users database connection.');
});