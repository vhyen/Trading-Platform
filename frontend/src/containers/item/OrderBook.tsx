import { Col, Container, Row } from "react-bootstrap";
import BuyOrderTable from "../../components/item/BuyOrderTable";
import SellOrderTable from "../../components/item/SellOrderTable";
import { Color } from "../../constants/Color";

export default function OrderBook() {
  const buyRecords: any = [
    {
      id: 0,
      price: 300.0,
      quantity: 238,
      total: 87679,
    },
  ];
  const sellRecords: any = [
    {
      id: 0,
      price: 300.0,
      quantity: 238,
      total: 87679,
    },
  ];
  const currentPrice = 299;
  const lastPrice = 300.0;

  let price;
  if (currentPrice > lastPrice) {
    price = 
    <p className="current-price m-0" style={{color: Color.text_green}}>{currentPrice}↑</p>;
  }
  else if (currentPrice < lastPrice) {
    price = 
    <p className="current-price m-0" style={{color: Color.text_red}}>{currentPrice}↓</p>;
  }
  else {
      price = <p className="current-price m-0">{currentPrice}</p>;
  }

  return (
    <>
      <style className="text/css">
        {`
        .current-price {
            font-size: 1.2rem;
            color: ${Color.primary};
        }
        `}
      </style>
      <BuyOrderTable records={buyRecords} />
      <Container>
        <Row className="align-items-baseline">
          <Col className="d-flex">
            {price}
        </Col>
        <Col>
        <p className="price m-0 ">{lastPrice}</p>
        </Col>
        </Row>
      </Container>
      <SellOrderTable records={sellRecords} />
    </>
  );
}
