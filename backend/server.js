const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const frontendPath = path.join(__dirname, '..', 'frontend', 'viptransport');
app.use(express.static(frontendPath));
app.use('/photo', express.static(path.join(frontendPath, 'photo')));
app.use('/css', express.static(path.join(frontendPath)));
app.use('/js', express.static(path.join(frontendPath)));
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'home.html'));
});
app.get('/:page', (req, res) => {
  res.sendFile(path.join(frontendPath, `${req.params.page}.html`));
});
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
