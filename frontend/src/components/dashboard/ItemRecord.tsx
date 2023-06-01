import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function ItemRecord({ item }: any) {
  return (
    <>
    <style className="text/css">
        {`
            .item-record{
                text-decoration:none;
                background-color:white;
                color:black;
            }
            .item-record:hover{
                color:black;
                background-color: #fefbd8;
            }
        `}
    </style>
      <NavLink to="/a" className="item-record">
        <Row className="py-1 align-items-center my-1 py-4" style={{backgroundColor:"inherit"}}>
          <Col className="d-inline-flex flex-row">
            <p className="fw-bold m-0" style={{fontSize:"1.2rem"}}>{item.name}</p>
          </Col>
          <Col>
            <p className="text-center m-0">${item.price}</p>
          </Col>
          <Col>
            <p className="m-0 text-center" style={{ color: item.change < 0 ? "red" : "green" }}>
              {item.change > 0 ? "+" : ""}
              {item.change * 100}%
            </p>
          </Col>
          <Col>
            <p className="text-end m-0">
              ${Math.round(item.marketcap / 1000000).toLocaleString("en-US")}M
            </p>
          </Col>
        </Row>
      </NavLink>
    </>
  );
}
