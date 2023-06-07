import axios from 'axios'
const accountURL = import.meta.env.VITE_ACCOUNT_SERVICE_URL
const orderURL = import.meta.env.VITE_ORDER_SERVICE_URL
const itemURL =import.meta.env.VITE_ITEM_SERVICE_URL

const account = axios.create({
	baseURL: accountURL,
})
const order = axios.create({
	baseURL: orderURL,
})
const item = axios.create({
	baseURL:itemURL
})
export {account,order,item}

