const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const frontendPath = path.join(__dirname, '..', 'frontend', 'viptransport');

app.use(express.static(frontendPath));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/photo', express.static(path.join(frontendPath, 'photo')));

app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'home.html'));
});

app.get('/:page', (req, res) => {
  const page = req.params.page;
  const filePath = path.join(frontendPath, `${page}.html`);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
