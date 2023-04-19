const express = require('express');
const db = require('./db'); 

const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  const { user_name, phone_number, car_number } = req.body;

 
  db.insertUser(user_name, phone_number, car_number, (err, userId) => {
    if (err) {
      res.status(500).json({ error: 'Failed to create user' });
    } else {
      res.status(201).json({ id: userId });
    }
  });
});

app.get('/users', (req, res) => {
  
  db.getUsers((err, users) => {
    if (err) {
      res.status(500).json({ error: 'Failed to get users' });
    } else {
      res.status(200).json(users);
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
