const express = require('express');

const app = express();

app.get('/campaigns', (req, res) => {
  const customer = {
    name: 'Beck',
    last: 'TJ',
  };

  res.json(customer);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
  if (err) {
    console.log('err:', err);
  }
  console.log(`Server is listening on port... ${PORT}`);
});
