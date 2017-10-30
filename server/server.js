const express = require('express');

const app = express();
const PORT = 666;

app.get('/', (req, res) => res.end());

app.listen(PORT, () => {
  console.log(`App 👂 @ Port ${PORT}`);
});
