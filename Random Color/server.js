const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

