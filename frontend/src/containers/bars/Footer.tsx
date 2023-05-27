import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Color } from "../../constants/Color";

let linkStyle = {
  display: "flex",
  alignItems: "center",
  color: "black",
};

export default function Footer() {
  return (
    <>
      <style>
        {`
          Nav.Link:visited {
            text-decoration: none;
          }
          .active {
            border-bottom: 0px
          }
        `}
      </style>

      <Container
        fluid
        style={{
          background: `${Color.main}`,
          color: "black"
        }}
      >
        <Row className="pt-5 pb-4 text-center justify-content-center align-items-center">
          <Col className="d-inline-flex mb-4 mb-md-0 justify-content-center">
            <div>
              <h6 className='text-uppercase fw-bold'>About Us</h6>
              <ul className="list-unstyled" style={{ marginBottom: 0 }}>
                <li>
                  <Nav.Link className="active" to="/aboutus" end as={NavLink} style={linkStyle}>
                    About us
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="active" to="/contactus" end as={NavLink} style={linkStyle}>
                    Contact us
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="active" to="/community" end as={NavLink} style={linkStyle}>
                    Community
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="active" to="/news" end as={NavLink} style={linkStyle}>
                    News
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col className="d-inline-flex mb-4 mb-md-0 justify-content-center">
            <div>
              <h6 className='text-uppercase fw-bold'>Products</h6>
              <ul className="list-unstyled" style={{ marginBottom: 0 }}>
                <li>
                  <Nav.Link className="active" to="/buyBNB" end as={NavLink} style={linkStyle}>
                    Buy BNB
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="active" to="/buyBUSD" end as={NavLink} style={linkStyle}>
                    Buy BUSD
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="active" to="/buyBitcoin" end as={NavLink} style={linkStyle}>
                    Buy Bitcoin
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="active" to="/buyRipple" end as={NavLink} style={linkStyle}>
                    Buy Ripple
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col className="d-inline-flex mb-4 mb-md-0 justify-content-center">
            <div>
              <h6 className='text-uppercase fw-bold'>Support</h6>
              <ul className="list-unstyled" style={{ marginBottom: 0 }}>
                <li>
                  <Nav.Link className="active" to="/help" end as={NavLink} style={linkStyle}>
                    Help
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="active" to="/privacy" end as={NavLink} style={linkStyle}>
                    Privacy
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="active" to="/terms" end as={NavLink} style={linkStyle}>
                    Terms
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="active" to="/services" end as={NavLink} style={linkStyle}>
                    Services
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col>
            <DropdownButton
              as={ButtonGroup}
              title="English"
              variant="light"
              style={{
                width: "40%",
              }}
            >
              <Dropdown.Item eventKey="1">Vietnamese</Dropdown.Item>
              <Dropdown.Item eventKey="2">France</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>

        <Row>
          <hr></hr>
        </Row>
        
        <Row className="pt-2 pb-3 px-5 justify-content-center align-items-center">
          TRADing © 2023
        </Row>
      </Container>
    </>
    
  );
}
