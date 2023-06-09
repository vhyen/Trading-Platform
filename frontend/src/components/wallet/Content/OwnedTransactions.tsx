import { Col, Container, Row } from "react-bootstrap";
import TransactionInfo from "./TransactionInfo";
import { Color } from "../../../constants/Color";

export default function OwnedTransactions({ transactions }: any) {
  return (
    <Container>
      <style className="text/css">
      {`    
            .custom-hover:hover{
              background-color: ${Color.grey};
            }
      `}
      </style>
      <Row
        className="g-0 py-3 rounded-top"
        style={{
          backgroundColor: Color.main_glow,
          marginBottom: "8px",
          alignSelf: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <Col>
          <b>Item</b>
        </Col>
        <Col>
          <b>Type</b>
        </Col>
        <Col>
          <b>Quantity</b>
        </Col>
        <Col>
          <b>Created At</b>
        </Col>
      </Row>
      {transactions?.map((transaction: any) => {
        return (
          <TransactionInfo key={transaction.id} transaction={transaction} />
        );
      })}
    </Container>
  );
}
