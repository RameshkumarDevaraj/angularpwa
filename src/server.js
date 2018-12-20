const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/pwademo'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/pwademo/index.html'));
});
app.listen(process.env.PORT || 8080);