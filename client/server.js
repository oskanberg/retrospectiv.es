const port = 3000;
const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/build/'));
app.use('/*', express.static(__dirname + '/build/index.html'));

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🐟 Server started", port, port);
    }
});
