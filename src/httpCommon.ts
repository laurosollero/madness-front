import axios from "axios"

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_ADDRESS,
  headers: {
    "Content-type": "application/json"
  }
})
