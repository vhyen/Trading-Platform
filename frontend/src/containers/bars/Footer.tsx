import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Button, ButtonGroup } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { Color } from "../../constants/Color";

let linkStyle = {
  display: "flex",
  alignItems: "center",
  color: "black",
};

export default function Footer() {
  return (
    <Container
      fluid
      style={{
        background: `${Color.main}`,
        color: "black",
      }}
    >
      <Row className="p-5 text-center justify-content-center align-items-center">
        <Col className="d-inline-flex">
          <ul
            style={{
              marginBottom: 0,
            }}
          >
            <li>
              <Nav.Link to="/aboutus" end as={NavLink} style={linkStyle}>
                About us
              </Nav.Link>
            </li>
            <li>
              <Nav.Link to="/contactus" end as={NavLink} style={linkStyle}>
                Contact us
              </Nav.Link>
            </li>
          </ul>
        </Col>
        <Col>
          <ul
            style={{
              marginBottom: 0,
            }}
          >
            <li>
              <Nav.Link to="/teamplans" end as={NavLink} style={linkStyle}>
                Team plans
              </Nav.Link>
            </li>
            <li>
              <Nav.Link to="/teachonmeshare" end as={NavLink} style={linkStyle}>
                Services
              </Nav.Link>
            </li>
          </ul>
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
      <Row id="rectangle"></Row>
      <Row className="pb-5 px-5">
        <Col>TRADing, Inc, 2023</Col>
        <Col>
          <Nav.Link to="/help" end as={NavLink} style={{ marginRight: "3%" }}>
            Help
          </Nav.Link>
        </Col>
        <Col>
          <Nav.Link
            to="/privacy"
            end
            as={NavLink}
            style={{ marginRight: "3%" }}
          >
            Privacy
          </Nav.Link>
        </Col>
        <Col>
          <Nav.Link to="/terms" end as={NavLink} style={{ marginRight: "3%" }}>
            Terms
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
}
