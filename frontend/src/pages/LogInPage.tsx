
import { Container} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom'
import { Color } from '../constants/Color'
import LoginForm from '../containers/auth/LoginForm'

export default function LoginInPage() {
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
		  <div className='d-flex justify-content-center' style={{backgroundColor:Color.main}}><p className='text-center m-2'>More than <strong> 1,000 </strong> items in platform</p></div>
		  <Container className="my-5">
			<Row className='align-items-center'>
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
				<h2>Enter your account</h2>
				<LoginForm />
			  </Col>
			  <Col>
			  <Image src="/sign_in_now.jpeg" style={{width:"100%"}}/>
			  <p className="text-center" style={{fontSize:"1.5rem"}}>Keep earning more money in your wallet!</p>
			  <p className="text-muted fst-italic">Simply deposit your preferred amount of cryptocurrencies into a product. Generally, you can see your earnings on your dashboard as early as the very next day. </p>
			  </Col>
			</Row>
		  </Container>
		</div>
	  </>
	)
}