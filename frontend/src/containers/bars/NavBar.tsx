import { Button, Col, Container, Row } from "react-bootstrap";
import NavButton from "../../components/NavButton";
import Authenticate from "../../components/auth/Authenticated";
import { useAppSelector } from "../../redux/store";
import logo from '../../../public/logo.png'

export default function NavBar() {
  const NavList = [
    {
      id: 0,
      text: "DashBoard",
      to: "/",
    },
    {
      id: 1,
      text: "About",
      to: "/about",
    },
    {
      id: 2,
      text: "Wallet",
      to: "/wallet",
    },
    {
      id: 3,
      text: "News",
      to: "/news",
    },
  ];
  const account = useAppSelector((state) => state.user.account)
  
  return (
    <>
      <style className="text/css">
        {`
            .navbar{
                background-color:white;
                box-shadow: 0px 3px 3px #aaaaaa;
                height:70px;
            }
            .btn-nav{
                border: none;
                width:100%;
                height:100%;

            }
        `}
      </style>
      <Container fluid className="navbar p-0">
        <Row className=" h-100 w-100 align-items-center px-5">
          <Col className="h-100 col-sm-2">
          <Button variant="nav">
              <img src={logo} alt="Logo" style={{ height: "100%" }} />
            </Button>
          </Col>
          <Col className="h-100">
          {
          NavList.map((nav: any) => 
                (nav.id == 2 && account == undefined) ? <></> : <NavButton key={nav.id} text={nav.text} to={nav.to}/>
        )
        }
          </Col>
          <Col sm={3}>
          {/* <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          /> */}
          </Col>
          <Authenticate/>
        </Row>
      </Container>
    </>
  );
}
