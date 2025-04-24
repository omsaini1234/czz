const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});


app.post('/signup', (req, res) => {
  const { username, email, password, dob } = req.body;


  if (!username || username.trim() === '') {
    return res.status(400).json({ error: 'Username cannot be empty' });
  }

  
  if (!email || email.trim() === '') {
    return res.status(400).json({ error: 'Email cannot be empty' });
  }


  if (!password || password.length < 8 || password.length > 16) {
    return res.status(400).json({
      error: 'Password length should be greater than 8 or less than or equal to 16',
    });
  }

  
  res.status(200).json({
    message: 'User signed up successfully!',
    data: { username, email, dob },
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
