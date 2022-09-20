import axios from 'axios'

export const axiosHttpClient = axios.create({baseURL: 'https://barbershop-backend-production.up.railway.app/api/v1'}) ;