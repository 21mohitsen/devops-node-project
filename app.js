const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps Deployment From My CentOS VM 🚀');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('App running on port 3000');
});
test
test
