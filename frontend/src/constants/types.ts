interface Account{
	first_name: string;
	last_name: string;
	username: string;
	email:string;
	banlance: number;
	type:string;
}
interface Order{
	item:string,
	price:number,
	quantity:number,
	type: string,
}
interface Item{
	uuid:string,
	name:string,
	slug:string,
	description:string,
	supply:number,
	current_price:number,
	change24:number,
	provider:string
}
interface User {
	token: string | undefined
	account: Account | undefined
}

interface SigninCredentails {
	username: string
	password: string
	remember: boolean
}
interface Record{
	price:number,
	total_quantity:number,
	total_filled:number
}

interface Pagination<T> {
	count: number,
	results: T[]
}
interface Notification{
	status: boolean,
	header:string,
	content: string,
}

export type {Account,Order,Item,User,SigninCredentails,Pagination,Notification,Record}