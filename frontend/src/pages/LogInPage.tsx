
import { Container} from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SignInForm from '../containers/auth/LoginForm'
import { Footer, NavBar } from '../containers/bars'

export default function LoginInPage() {
	return (
        <div className="vh-100" style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
        <NavBar />
		<Container
			fluid
			style={{
				padding: 0,
			}}
		>		
			<Row>
				<Col
					style={{
						display: 'flex',
						flexDirection: 'column',
						marginLeft: '3%',
						marginRight: '3%',
						padding: 0,
					}}
					xs={6}
				>
				</Col>
				<Col
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: '10%',
						marginBottom: '10%',
						marginLeft: '10%',
						marginRight: '10%',
						backgroundColor: '#002333',
						color: 'white',
						borderRadius: 40,
						paddingTop: 20,
						paddingBottom: 20,
					}}
				>
					<h1
						style={{
							fontSize: 40,
						}}
					>
						Sign in
					</h1>
					<h2
						style={{
							fontSize: 20,
						}}
					>
						Sign in to your account
					</h2>
					<SignInForm />
					{/* <SignInSocialAccount /> */}
				</Col>
			</Row>
		</Container>
        <Footer />
        </div>
	)
}