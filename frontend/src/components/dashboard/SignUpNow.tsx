import { Color } from "../../constants/color";
import { NavLink } from "react-router-dom";
import { GiftFilled } from "@ant-design/icons";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function SignUpNow() {
  return (
    <Container fluid className="p-0 mb-5">
      <style>
        {`
            .nav-total-info{
              text-decoration:none;
            }
            .nav-total-info:hover{
              opacity:0.7;
            }
        `}
      </style>
      <Row>
        <NavLink
          to="/signup"
          style={{ textDecoration: "none", color: Color.primary }}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ backgroundColor: Color.main_light }}
          >
            <GiftFilled style={{ color: Color.main }} />
            <p className="text-center m-2">
              Register now - Get up to 100 VNDT in trading fee rebate
            </p>
          </div>
        </NavLink>
      </Row>
      <Container className="pt-5">
        <Row>
          <Col
            className="d-flex flex-column align-items-start justify-conten-center mx-1 my-2 py-2"
            style={{
              backgroundColor: "transparent",
              color: Color.primary,
              borderRadius: 40,
            }}
            sm={3}
            lg={5}
          >
            <h1> Buy, trade, and hold 50+ items on TRADing</h1>
            <NavLink
              to="/signup"
              className="nav-total-info rounded w-75"
              style={{ backgroundColor: Color.main, color: Color.primary }}
            >
              <p className="text-center p-2 px-5 m-0">Sign Up Now</p>
            </NavLink>
            <Container className="m-0 w-75">
              <Row>
                <Col sm={5}>
                  <hr className="w-100" />
                </Col>
                <Col sm={2}>
                  <p className="w-100">Or</p>
                </Col>
                <Col sm={5}>
                  <hr className="w-100" />
                </Col>
              </Row>
            </Container>
            <NavLink
              to="/login"
              className="nav-total-info rounded w-75"
              style={{ backgroundColor: Color.grey, color: Color.primary }}
            >
              <p className="text-center p-2 px-5 m-0">Continue with Google</p>
            </NavLink>
          </Col>
          <Col sm={4} lg={6}>
            <Image src="/total_info.png" style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
