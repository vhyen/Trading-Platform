import { Button, Col, Form } from "react-bootstrap";
import { Color } from "../../constants/Color";
import InputField from "../../components/item/forms/InputField";
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

export default function OrderLimitForm({ button, coin_unit, price_unit }: any) {

  return (
    <>
      <style className="text/css">
        {`    
             .custominput:focus {
                   background-color:gray;
                   outline:0;
                   border-color:gray;
                   border:none;
                   box-shadow: none;
            }
      `}
      </style>
      <Form
        id="myForm"
        className="px-4 pt-2 pb-4"
        style={{ background: Color.form_background_main }}
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
          <InputField field="Price" name="price" unit={price_unit} />
          <InputField field="Amount" name="amount" unit={coin_unit} />
        </Form.Group>

        <Button
          style={{
            width: `-webkit-fill-available`,
            background: Color.form_background_text,
            color: Color.main,
            border: `none`,
          }}
          className="pt-2 pb-2"
        >
          {button}
        </Button>
      </Form>
    </>
  );
}
