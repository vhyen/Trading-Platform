import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Color } from "../../constants/color";

export default function ItemRecord({item}: any) {
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
                background-color:${Color.grey};
            }
        `}
    </style>
      <NavLink to={`/item/${item.uuid}`} className="item-record">
        <Row className="py-1 align-items-center my-1 py-4" style={{backgroundColor:"inherit"}}>
          <Col className="d-inline-flex flex-row align-items-center">
            <p className="fw-bold m-0" style={{fontSize:"1.2rem"}}>{item.name}</p>
            <p className="m-0 mx-4 text-muted">{item.slug}</p>
          </Col>
          <Col>
            <p className="text-center m-0">${item?.current_price}</p>
          </Col>
          <Col>
            <p className="m-0 text-center" style={{ color: Number(item.change24)< 0 ? "red" : "green" }}>
              {item.change24 > 0 ? "+" : ""}
              {item.change24}%
            </p>
            
          </Col>
          <Col>
            <p className="text-end m-0">
              ${Math.round(Number(item.current_price) * item.supply / 1000).toLocaleString("en-US")}K
            </p>
          </Col>
        </Row>
      </NavLink>
    </>
  );
}
