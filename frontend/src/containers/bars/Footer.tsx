import { Container, Row, Col } from "react-bootstrap";
import ListLink from "../../components/footer/ListLink";
import Language from "../../components/footer/Language";

export default function Footer() {
  const AboutUs = [
    {
      id: 0,
      title: "About",
      to: "/about",
    },
    {
      id: 1,
      title: "Contact",
      to: "/contact",
    },
    {
      id: 2,
      title: "Comunity",
      to: "/comunity",
    },
    {
      id: 3,
      title: "News",
      to: "/news",
    },
  ];
  const Services = [
    {
      id: 0,
      title: "Exchange",
      to: "/exchange",
    },
    {
      id: 1,
      title: "Market",
      to: "/market",
    },
    {
      id: 2,
      title: "Deposit",
      to: "/deposit",
    },
  ];
  const Support = [
    {
      id: 0,
      title: "Help",
      to: "/help",
    },
    {
      id: 1,
      title:"Privacy",
      to:"/privacy",
    },
    {
      id:2,
      title:"Term",
      to:"/term"
    },
    {
      id:3,
      title:"Trading Rules",
      to:"/trading_rules"
    }
  ];
  return (
    <>
      <Container
        fluid
        style={{
          background: "white",
          color: "black",
        }}
      >
        <Row className="mt-5 mb-4">
          <Col className="d-inline-flex mb-4 mb-md-0 justify-content-center">
            <ListLink title="About us" list={AboutUs} />
          </Col>
          <Col className="d-inline-flex mb-4 mb-md-0 justify-content-center">
            <ListLink title="Services" list={Services} />
          </Col>

          <Col className="d-inline-flex mb-4 mb-md-0 justify-content-center">
            <ListLink title="Support" list={Support}/>
          </Col>
          <Col className="d-inline-flex col-sm-5 justify-content-center align-items-center">
            <Language/>
          </Col>
        </Row>

          <hr></hr>

        <Row className="pt-2 pb-3 px-5 justify-content-center align-items-center">
          TRADing © 2023
        </Row>
      </Container>
    </>
  );
}
