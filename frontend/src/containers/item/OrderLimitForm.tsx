import { Button, Col, Form } from "react-bootstrap";
import { Color } from "../../constants/color";
import InputField from "../../components/item/forms/InputField";
import { useState } from "react";
import { order } from "../../client/axios";
import { Order } from "../../constants/types";
import APIS from "../../constants/api";
import PRICE_UNIT from "../../constants/common";

// const navigate = useNavigate();

// const [formData, setFormData] = useState({
//   price: "",
//   amount: "",
// });

// export function handleChange(e: any) {
//   const key = e.target.name;
//   const value = e.target.value;
//   setFormData({ ...formData, [key]: value });
// }

export default function OrderLimitForm({ type, item,setShow,setNotification }: any) {
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
      price: formData.price,
      quantity: formData.amount,
      item:item.uuid,
      type:'L'
    })
    .then((response) => {
      setShow(true)
      setNotification({status:true,header:'Order',content:'Create order success'})
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
        id={type + 'limit'}
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
          <InputField field="Price" name='price' handleChange={handleChange} unit={PRICE_UNIT} />
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
