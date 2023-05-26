import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Color } from "../../constants/Color";

export default function OrderForm() {
  return (
    <>
      <style className="text/css">
          {`    
            .custominput:onClick {
              border: none;
              background-color: #FFF;
            }
      `}
      </style>
      <Form className="p-5" style={{ background: Color.form_background_main }}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label color={Color.form_text_second}>Avbl</Form.Label>
            <Form.Control
              className="mb-3"
              style={{ background: Color.form_background_text }}
              size="sm"
              type="number"
              placeholder="Price"
            />
            <Form.Control
              style={{ background: Color.form_background_text }}
              size="sm"
              type="text"
              placeholder="Amount"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label
              style={{ color: Color.form_text_second }}
              className="ml-3"
            >
              Avbl
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text
                style={{
                  background: Color.form_background_text,
                  color: Color.form_text_second,
                  border: `none`,
                }}
              >
                {" "}
                Price
              </InputGroup.Text>
              <Form.Control
                id="inlineFormInputGroup"
                style={{
                  textAlign: `right`,
                  background: Color.form_background_text,
                  border: `none`,
                  color: Color.form_text_primary,
                }}
                className="custominput"
                type="number"
              />
              <InputGroup.Text
                style={{
                  background: Color.form_background_text,
                  color: Color.form_text_primary,
                  border: `none`,
                }}
              >
                USDT
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
}
