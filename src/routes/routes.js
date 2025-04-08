import express from "express"
import { generateApiKey } from "../api/generateApiKey.js";
import { checkApiKey } from "../middleware/checkApikey.js";
import { getData, postData } from "../services/apiClient.js";
import { response } from "../res/costumResponse.js"

export const router = express.Router();

router.get('/generate-api-key', (req, res) => {
    try {
        const key = generateApiKey();
        response(200, { api_key: key }, "Sucess", res);
    } catch (error) {
        response(500, { data: error }, "Terjadi kesalahan", res)
    }
});

router.get('/ongkir-destination', checkApiKey, async (req, res) => {
    try {
        const decode = decodeURI(req.query.search)
        const data = await getData('destination/domestic-destination', `search=${decode}`)
        response(200, data, "Sucess", res)
    } catch (error) {
        response(500, { data: error }, "Terjadi kesalahan", res)
    }
});

router.post('/ongkir-cost', async (req, res) => {
    try {
        const data = await postData('calculate/domestic-cost', req.body)
        response(200, data, "Sucess", res)
    } catch (error) {
        response(500, { data: error }, "Terjadi kesalahan", res)
    }
});