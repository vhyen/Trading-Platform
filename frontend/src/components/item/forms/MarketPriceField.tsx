import { Form, InputGroup } from "react-bootstrap";
import { Color } from "../../../constants/Color";
import PRICE_UNIT from "../../../constants/common";

export default function MarktePriceField({ field }: any) {
  return (
    <>
      <InputGroup className="custom-input-group mb-2">
        <InputGroup.Text
         style={{
          background: Color.grey,
          color: Color.primary,
          fontSize: `14px`,
          border: `none`,
      }}
        >
          {field}
        </InputGroup.Text>
        <Form.Control
          style={{
            background: Color.grey,
            border: `none`,
            textAlign: `end`,
            color: Color.primary,
            fontSize: `14px`,
          }}
          className="custominput pt-2 pb-2"
          defaultValue={'Market'}
          disabled
        />
        <InputGroup.Text
          style={{
            background: Color.grey,
            color: Color.primary,
            fontSize: `14px`,
            border: `none`,
            width: `4rem`,
          }}
        >
          {PRICE_UNIT}
        </InputGroup.Text>
      </InputGroup>
    </>
  );
}
