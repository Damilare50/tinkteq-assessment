import express from 'express';
import 'dotenv/config';

const app = express();
const appPort = parseInt(process.env.PORT);

app.listen(appPort, () => {
  console.log(`Server started on port ${appPort}`);
});
