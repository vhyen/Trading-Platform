import { Button, Col, Form } from "react-bootstrap";
import { Color } from "../../constants/Color";
import InputField from "../../components/item/forms/InputField";
import MarktePriceField from "../../components/item/forms/MarketPriceField";
import APIS from "../../constants/api";
import { useState } from "react";
import { order } from "../../client/axios";
import { Order } from "../../constants/types";


export default function OrderMarketForm({type, item ,setShow,setNotification }: any) {
  const [formData, setFormData] = useState({
    price: 0,
    amount: 0,
  });
  const onSubmit = (e:any) => {
  e.preventDefault()
  setShow(true)
  setNotification({status:true,header:'Order',content:'Create order success'})
  console.log(formData)
  const api = (type=='S') ? APIS.SELL_ORDER : (type=='B') ? APIS.BUY_ORDER : '';
  order.post<Order>(api , {
    price: item.current_price,
    quantity: formData.amount,
    item:item.uuid,
    type:'M'
  })
  .then((response) => {
    setFormData({
      price: 0,
      amount: 0,
    })
  })
}
const handleChange = (e : any) => {
  const key = e.target.name;
  const value = e.target.value;
  setFormData({ ...formData, [key]: value });
} 
  return (
    <>
      <Form
        className="px-4 pt-2 pb-4"
        style={{ background: Color.white }}
        onSubmit={onSubmit}
      >
        <Form.Group as={Col}>
          <Form.Label
            style={{
              color: Color.form_text_second,
              fontSize: `14px`,
            }}
            className="ml-3"
          >
            Abvl
          </Form.Label>
          <MarktePriceField field="Price"/>
          <InputField field="Amount" name='amount' handleChange={handleChange} unit={item?.name} />
        </Form.Group>

        <Button
          style={{
            width: `-webkit-fill-available`,
            backgroundColor: type == 'S' ? Color.text_red : type == 'B'? Color.text_green :"",
            color: Color.white,
            border: `none`,
          }}
          className="pt-2 pb-2"
          type="submit"
        >
          {type == 'S' && 'Sell' || type == 'B'&& 'Buy'}
        </Button>
      </Form>
    </>
  );
}
