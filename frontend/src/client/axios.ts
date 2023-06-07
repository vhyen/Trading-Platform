import axios from 'axios'
const accountURL = import.meta.env.VITE_ACCOUNT_SERVICE_URL
const orderURL = import.meta.env.VITE_ORDER_SERVICE_URL
const itemURL =import.meta.env.VITE_ITEM_SERVICE_URL
const newsURL =import.meta.env.VITE_NEWS_SERVICE_URL

const account = axios.create({
	baseURL: accountURL,
})
const order = axios.create({
	baseURL: orderURL,
})
const item = axios.create({
	baseURL:itemURL
})
const news = axios.create({
	baseURL:newsURL
})
export {account,order,item, news}

