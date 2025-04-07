import axios from "axios";
import dotenv from 'dotenv'

dotenv.config();

export const getData = async (resource, query) => {
  try {
    const url = `${process.env.BASE_URL}/${resource}?${query}`
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        key: process.env.API_KEY
      },
    })

    return response.data.data
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data", error)
  }
}

export const postData = async (resource, request) => {
  const params = new URLSearchParams()
  Object.entries(request).forEach(([key, value]) => {
    if (value) params.append(key, value)
  })

  try {
    const url = `${process.env.BASE_URL}/${resource}`
    const response = await axios.post(url, params.toString(), {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        key: process.env.API_KEY
      },
    })

    return response.data.data
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data", error)
  }
}