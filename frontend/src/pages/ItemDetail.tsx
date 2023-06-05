import { Col, Container, Row } from "react-bootstrap";
import OrderBook from "../containers/item/OrderBook";
import CandleStickChart from "../containers/item/CandleStickChart";
import { NavBar } from "../containers/bars";
import OrderForm from "../containers/item/OrderForm";

export default function ItemDetail() {
  return (
    <>
      <NavBar />
      <Container fluid className="p-0">
        <Row>
          <Col sm={3}>
            <OrderBook />
          </Col>
          <Col sm={9} id="colchart">
            <Container>
              <Row>
                <CandleStickChart
                  chartHeight={400}
                  chartWidth={1040}
                  highest={33288}
                  lowest={384}
                />
              </Row>
              <Row>
                <Col className="p-0">
                <OrderForm button="Buy"/>
                </Col>
                <Col className="p-0">
                <OrderForm button="Sell"/>
                </Col>

              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
