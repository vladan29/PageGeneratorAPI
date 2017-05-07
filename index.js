const express = require('express');
const app = express();

const PAGE_SIZE = 10;

let page, values, i, limit;

app.get('/api', function (req, res) {
  console.log('api triggered');
  values = [];
  page = Number(req.query.page || 0);
  i = page * PAGE_SIZE;
  limit = i + PAGE_SIZE;
  for (; i < limit; i++) {
    values.push(i);
  }
  res.send(values);
});

app.listen(process.env.PORT, function () {
  console.log('Generator app started');
});
