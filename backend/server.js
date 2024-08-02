const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'legal_casesr'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Handle form submission
app.post('/api/submit', (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  // Hash the password before storing it
  bcrypt.hash(password, 8, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).send('Error hashing password');
    }

    const formData = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: hashedPassword
    };

    const sql = 'INSERT INTO users SET ?';
    db.query(sql, formData, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).send('Error inserting data');
      } else {
        return res.status(200).send('Form data submitted successfully');
      }
    });
  });
});

// Handle login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).send('Error fetching user');
    }

    if (results.length === 0) {
      return res.status(401).send('Invalid email or password');
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).send('Error comparing passwords');
      }

      if (!isMatch) {
        return res.status(401).send('Invalid email or password');
      }

      // Exclude password before sending user data
      const { password, ...userData } = user;
      console.log(userData)

      res.status(200).json(userData);
    });
  });
});


const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
