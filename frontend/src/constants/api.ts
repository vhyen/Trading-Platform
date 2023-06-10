const APIS = {
	GET_ACCOUNT: 'account/me',
	SIGN_UP:'account/sign_up',
	SIGN_IN: 'account/sign_in',
	SOCIAL_SIGN_IN: 'api/token/google/',
	SELL_ORDER: 'order/sell_order',
	SELL_ORDER_BOOK: 'order/sell_order/order_book?item=',
	BUY_ORDER: 'order/buy_order',
	BUY_ORDER_BOOK: 'order/buy_order/order_book?item=',
	GET_ITEM: 'item/item/',
	GET_CANDLE_MINUTE: 'item/price_record/candle_minute',
	GET_CANDLE_NOW_MINUTE: 'item/price_record/candle_now_minute',
	GET_CANDLE_HOUR: 'item/price_record/candle_hour',
	GET_CANDLE_NOW_HOUR: 'item/price_record/candle_now_hour',
}

export default APIS