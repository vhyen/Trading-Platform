import { Form, InputGroup } from "react-bootstrap";
import { Color } from "../../../constants/Color";


export default function InputField({ field, unit,name }: any) {

  return (
    <>
      <InputGroup className="mb-2">
        <InputGroup.Text
          style={{
            background: Color.form_background_text,
            color: Color.form_text_second,
            fontSize: `14px`,
            border: `none`,
        }}
        >
          {field}
        </InputGroup.Text>
        <Form.Control
          id="inlineFormInputGroup"
          name={field}
          style={{
            background: Color.form_background_text,
            border: `none`,
            textAlign: `end`,
            color: Color.form_text_primary,
            fontSize: `14px`,
          }}
          className="custominput pt-2 pb-2"
          type="number"

        />
        <InputGroup.Text
          style={{
            background: Color.form_background_text,
            color: Color.form_text_primary,
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
