const express = require('express');
const app = express();
const port = 80;
app.get('/', (req, res) => res.send('Hello from AKS!'));
app.listen(port, () => console.log(`Server running on port ${port}`));

