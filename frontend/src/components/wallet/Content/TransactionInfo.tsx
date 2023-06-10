import { Col, Row } from "react-bootstrap";
import { Color } from "../../../constants/Color";

export default function TransactionInfo({ transaction }: any) {
  const datetime = transaction.created_at.split(" ");

  return (
    <Row
      className="g-0 py-3 custom-hover"
      style={{
        marginBottom: "8px",
        alignSelf: "center",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <Col>
        <p className="my-0">
          <b>{transaction.item}</b>
        </p>
        <p className="my-0">{transaction.price}</p>
      </Col>
      <Col>
        <p
          style={{
            color: transaction.type == "S" ? Color.text_red : Color.text_green,
            marginLeft: "12px",
          }}
        >
          <b>{transaction.type}</b>
        </p>
      </Col>
      <Col>
        <p className="my-0">
          <b>{transaction.quantity}</b>
        </p>
        <p className="my-0">{transaction.total}</p>
      </Col>
      <Col>
        <p>
          <span style={{ fontWeight: 500 }}>{datetime[0]}</span>{" "}
          <small>{datetime[1]}</small>
        </p>
      </Col>
    </Row>
  );
}
