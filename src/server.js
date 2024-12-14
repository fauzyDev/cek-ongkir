import express from 'express'
import dotenv from 'dotenv'
import { router } from './routes/routes.js';
import { response } from './res/costumResponse.js';

dotenv.config()

const app = express();
const port = process.env.PORT;
app.get('/', (req, res) => {
    response(200, { connect: true }, 'API cek ongkir Ready!🚀', res)
})

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})