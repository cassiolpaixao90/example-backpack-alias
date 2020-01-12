import express from 'express';
import UserController from '~/controllers';

const app = express();

app.get('/', async (req, res) => {
  return res.json(UserController.getAll());
});

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.error(err);
  }

  console.log(`> listening on port ${port}`);
});
