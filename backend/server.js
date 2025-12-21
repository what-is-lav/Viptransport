const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const frontendPath = path.join(__dirname, '..', 'frontend', 'viptransport');

app.use(express.static(frontendPath));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/photo', express.static(path.join(frontendPath, 'photo')));

app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'home.html'));
});

app.get('/:page([a-zA-Z0-9-]+)', (req, res) => {
  res.sendFile(path.join(frontendPath, `${req.params.page}.html`));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
