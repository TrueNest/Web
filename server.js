const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`server listen ${port}`));
