export interface Account{
	first_name: string;
	last_name: string;
	username: string;
	email:string;
	banlance: number;
	type:string;
}
export interface Post{
	uuid: string;
	title: string;
	creator: Account
	react: number;
	comment:number;
	video:string;
	tag: string[];
	
}
export interface User {
	token: string | undefined
	account: Account | undefined
}

export interface SigninCredentails {
	username: string
	password: string
	remember: boolean
}

export interface Pagination<T> {
	count: number,
	results: T[]
}