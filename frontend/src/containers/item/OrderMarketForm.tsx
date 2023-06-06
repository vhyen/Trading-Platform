import { Button, Col, Form } from "react-bootstrap";
import { Color } from "../../constants/Color";
import InputField from "../../components/item/forms/InputField";
import MarktePriceField from "../../components/item/forms/MarketPriceField";


export default function OrderMarketForm({
  button,
  coin_unit,
  price_unit,
}: any) {

  
  
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
        className="px-4 pt-2 pb-4"
        style={{ background: Color.form_background_main }}
        onSubmit={(e)=>{alert(e.target)}}
      >
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label
            style={{
              color: Color.form_text_second,
              fontSize: `14px`,
            }}
            className="ml-3"
          >
            Abvl
          </Form.Label>
          <MarktePriceField field="Price" unit={price_unit} />
          <InputField field="Amount" unit={coin_unit} />
        </Form.Group>

        <Button
          style={{
            width: `-webkit-fill-available`,
            background: Color.form_background_text,
            color: Color.main,
            border: `none`,
          }}
          className="pt-2 pb-2"
          onClick={(e)=>console.log(e)}
        >
          {button}
        </Button>
      </Form>
    </>
  );
}
