const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
const publicFolder = path.join(__dirname, 'build');

app.use(express.static(publicFolder));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicFolder, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});