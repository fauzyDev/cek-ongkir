import express from "express"
import { generateApiKey, isApiKeyValid } from "../api/generateApiKey.js";
import { getData, postData } from "../services/apiClient.js";
import { response } from "../res/costumResponse.js"

export const router = express.Router();

router.get('/generate-api-key', (req, res) => {
    const key = generateApiKey();
    response(200, { api_key: key }, "sucess", res);
  });

router.get('/ongkir-destination', isApiKeyValid, async (req, res) => {
    try {
        const decode = decodeURI(req.query.search)
        const data = await getData('destination/domestic-destination', `search=${decode}`)
        response(200, data, "Success", res)
    } catch (error) {
        response(500, { data: failed }, "Terjadi kesalahan", res)
    }
});

router.post('/ongkir-cost', isApiKeyValid, async (req, res) => {
    try {
        const data = await postData('calculate/domestic-cost', req.body)
        response(200, data, "Success", res)
    } catch (error) {
        response(500, { data: error }, "Terjadi kesalahan", res)
    }
})