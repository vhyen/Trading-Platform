import { Col, Form, Row } from "react-bootstrap";
import { Color } from "../../constants/Color";

export default function OrderForm() {
  return (
    <Form className="p-5">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label color={Color.form_text_second}>Avbl</Form.Label>
          <Form.Control size="sm" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label color={Color.form_text_second}>Avbl</Form.Label>
          <Form.Control size="sm" type="password" placeholder="Password" />
        </Form.Group>
      </Row>
    </Form>
  );
}
