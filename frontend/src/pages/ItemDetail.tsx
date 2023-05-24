import { Col, Container, Row } from "react-bootstrap";
import OrderBook from "../containers/item/OrderBook";
import CandleStickChart from "../containers/item/CandleStickChart";


const candles = data.slice(0, 20);
const values = candles.map(candle => [candle.low, candle.high]).flat();
const domain = [Math.min(...values), Math.max(...values)];
const caliber = size/candles.length;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
const getDomain = (rows: Candle[]): [number, number] => {
  const values = rows.map(({ high, low }) => [high, low]).flat();
  return [Math.min(...values), Math.max(...values)];
};
const domain = getDomain(candles);

export default function ItemDetail() {
    return (
        <>
        <Container fluid className="p-0">
            <Row>
                <Col sm={3}>
                    <OrderBook/>
                </Col>
                <Col sm={9}>
                    <CandleStickChart {...{candles, caliber, size, domain}}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}