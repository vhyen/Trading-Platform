import { Col, Container, Row } from "react-bootstrap";
import ItemRecord from "../../components/dashboard/ItemRecord";
import { NavLink } from "react-router-dom";
import { Color } from "../../constants/Color";

export default function PopularItems() {
  const items = [
    {
      id: 0,
      name: "BNB",
      price: 309.1,
      change: 0.0027,
      marketcap: 12312421,
    },
    {
      id: 1,
      name: "JPY",
      price: 102.2,
      change: -0.0032,
      marketcap: 424898023123,
    },
    {
      id: 2,
      name: "BNB",
      price: 44.2,
      change: 0.0021,
      marketcap: 1221321324,
    },
    {
      id: 3,
      name: "ABC",
      price: 6623.1,
      change: -0.021,
      marketcap: 14123123893,
    },
  ];
  return (
    <>
    <style className="text/css">
        {`
        .more {
            text-decoration:none;
            color:${Color.muted};

        }
        .more:hover{
            color:${Color.main};
        }
        `}
    </style>
    <Container>
      <Row className="align-items-end pb-5">
        <Col>
          <p className="highlight">Popular cryptocurrencies</p>
        </Col>
        <Col>
          <NavLink
            className="more"
            to="/more"
          >
            <p className="text-end m-0">View more market {`>>`}</p>
          </NavLink>
        </Col>
      </Row>
      <Row className="my-2 border-bottom border-2">
        <Col><p className="fw-bold">Name</p></Col>
        <Col>
          <p className="fw-bold text-center">Price</p>
        </Col>
        <Col>
          <p className="fw-bold">24h Change</p>
        </Col>
        <Col>
          <p className="fw-bold text-end">Market Cap </p>
        </Col>
      </Row>
      {items.map((item: any) => {
        return <ItemRecord key={item.id} item={item} />;
      })}
    </Container>
    </>
  );
}
