const express = require('express');
const Instagram = require('node-instagram').default;


// Create a new instance.
const instagram = new Instagram({
  clientId: ' 40918c9d036d03d',
  clientSecret: ' d1333f141f692267e57359f71b7',
  accessToken: '5220665400.1c34121592054c70b3c419646200de4f',
});

const redirectUri = 'http://localhost:3000/auth/instagram/callback';

// create express server
const app = express();

// Handle auth code and get access_token for user
app.get('/auth/instagram/callback', async (req, res) => {
  try {
    instagram.get('users/self', (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    });
  } catch (error) {
    res.json(error);
  }
});

// listen to port 3000
app.listen(3000, () => {
  console.log('app listening on http://localhost:3000');
});