const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/AngularTestProject'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/AngularTestProject/index.html'));
});
app.listen(process.env.PORT || 8080);
