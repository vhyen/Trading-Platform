import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignUpForm from "../containers/auth/SignUpForm";
import { Color } from "../constants/Color";
import { NavLink } from "react-router-dom";
import Image from 'react-bootstrap/Image'

export default function SignUpPage() {
  return (
    <>
      <style>
        {`.nav{
                border: none;
                width:100%;
                height:100%;

            }`}
      </style>

      <div
        className="vh-100"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavLink to="/" className="nav mx-5" style={{height:"70px"}}>
          <img src="logo.png" alt="Logo" style={{height:"100%"}} />
        </NavLink>
        <Container className="my-5">
          <Row>
            <Col
              className="d-flex flex-column align-items-start justify-conten-center mx-1 my-2 py-2"
              style={{
                backgroundColor: "white",
                color: Color.primary,
                borderRadius: 40,
              }}
              sm={5} lg={7}
            >
              <h1> Welcome to TRADing</h1>
              <h2>Create your account</h2>
              <SignUpForm />
            </Col>
			<Col>
			<Image src="/sign_up_now.png" style={{width:"100%"}}/>
			<p className="text-center" style={{fontSize:"1.5rem"}}>Sign up to get 100 USDT trading fee rebate!</p>
			<p className="text-muted fst-italic">Follow the registration steps to redeem your rewards and start your crypto journey with us! </p>
			</Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
