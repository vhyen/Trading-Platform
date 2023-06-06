import { Form, InputGroup } from "react-bootstrap";
import { Color } from "../../../constants/Color";


export default function InputField({ field,name, unit, handleChange }: any) {

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
          name={name}
          style={{
            background: Color.grey,
            border: `none`,
            textAlign: `end`,
            color: Color.primary,
            fontSize: `14px`,
          }}
          className="custominput pt-2 pb-2"
          type="number"
          onChange={(e)=>{handleChange(e)}}
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
          {unit}
        </InputGroup.Text>
      </InputGroup>
    </>
  );
}
