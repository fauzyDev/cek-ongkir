import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import { router } from "./src/routes/routes.js";
import { response } from './src/res/costumResponse.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    response(200, { connect: true }, 'API cek ongkir Ready!🚀', res)
})

app.use("/api",router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})