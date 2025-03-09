import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(process.env.PORT || 5000);
