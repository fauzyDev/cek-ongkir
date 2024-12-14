import express from "express"
import { response } from "../res/costumResponse.js"

export const router = express.Router()

router.get('/api/cek', async (req, res) => {
    response(200, { data: true }, "cek", res)
})