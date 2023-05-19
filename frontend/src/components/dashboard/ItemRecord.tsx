import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Color } from "../../constants/Color";

export default function ItemRecord({ item }: any) {
  return (
    <>
    <style className="text/css">
        {`
            .item-record{
                text-decoration:none;
                background-color:black;
            }
            .item-record:hover{
                color:black;
                background-color: #fefbd8;
            }
        `}
    </style>
      <NavLink to="" className="item-record">
        <Row className="py-1">
          <Col>
            <p className="fw-bold">{item.name}</p>
          </Col>
          <Col>
            <p className="text-center">${item.price}</p>
          </Col>
          <Col>
            <p style={{ color: item.change < 0 ? "red" : "green" }}>
              {item.change > 0 ? "+" : ""}
              {item.change * 100}%
            </p>
          </Col>
          <Col>
            <p className="text-end">
              ${Math.round(item.marketcap / 1000000).toLocaleString("en-US")}M
            </p>
          </Col>
        </Row>
      </NavLink>
    </>
  );
}
