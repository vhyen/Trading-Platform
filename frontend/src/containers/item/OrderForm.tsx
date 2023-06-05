import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Color } from "../../constants/Color";
import InputField from "../../components/item/forms/InputField";

export default function OrderForm({ button }: any) {
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
      <Form className="p-5" style={{ background: Color.form_background_main }}>
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
          <InputField field="Price" unit="USDT" />
          <InputField field="Amount" unit="SJK" />
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
