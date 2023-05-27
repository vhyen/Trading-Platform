import { FormControl, FormLabel, Grid, Input } from '@chakra-ui/react'
import { Container, Row, Col, Button } from 'react-bootstrap'
// import "../../css/bootstrap-social.css"
import { GoogleLogin } from '@react-oauth/google';

export default function LogInContent() {
    const responseMessage = (response: any) => {
        console.log(response);
    };
    const errorMessage = () => {
        console.log('Fail to log in with Google.');
    };

    return (
        <>
        <style>
            {`
                .btn-google{color:#fff;background-color:#dd4b39;border-color:rgba(0,0,0,0.2)}
                .btn-google:focus,.btn-google.focus{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,0.2)}
                .btn-google:hover{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,0.2)}
                .btn-google:active,.btn-google.active,.open>.dropdown-toggle.btn-google{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,0.2)}.btn-google:active:hover,.btn-google.active:hover,.open>.dropdown-toggle.btn-google:hover,.btn-google:active:focus,.btn-google.active:focus,.open>.dropdown-toggle.btn-google:focus,.btn-google:active.focus,.btn-google.active.focus,.open>.dropdown-toggle.btn-google.focus{color:#fff;background-color:#a32b1c;border-color:rgba(0,0,0,0.2)}
                .btn-google:active,.btn-google.active,.open>.dropdown-toggle.btn-google{background-image:none}
                .btn-google.disabled:hover,.btn-google[disabled]:hover,fieldset[disabled] .btn-google:hover,.btn-google.disabled:focus,.btn-google[disabled]:focus,fieldset[disabled] .btn-google:focus,.btn-google.disabled.focus,.btn-google[disabled].focus,fieldset[disabled] .btn-google.focus{background-color:#dd4b39;border-color:rgba(0,0,0,0.2)}
                .btn-google.badge{color:#dd4b39;background-color:#fff}
            `}
        </style>

        <Container style={{ marginTop: '5px', width:'50%' }}>
            <h1>Log In</h1>
            <Row>
                <Grid gap={6}>
                    <FormControl  id="emailAddress">
                        <Row style={{paddingBlock: '8px'}}>
                            <Col className='col-3'>                        
                                <FormLabel style={{paddingBlock: '8px'}}>Email</FormLabel>
                            </Col>
                            <Col style={{display: 'flex', justifyContent:'center'}} className='col-9'>                        
                                <Input style={{paddingBlock: '5px', width: '100%'}} focusBorderColor="brand.blue" type="email" placeholder="email" />
                            </Col>
                        </Row>
                    </FormControl>

                    <FormControl id="password">
                        <Row>
                            <Col className='col-3'>
                                 <FormLabel style={{paddingBlock: '8px'}}>Password</FormLabel>
                            </Col>
                            <Col style={{display: 'flex', justifyContent:'center'}} className='col-9'>                        
                                <Input style={{paddingBlock: '5px', width: '100%'}} focusBorderColor="brand.blue" type="password" placeholder="password" />
                            </Col>
                        </Row>
                    </FormControl>
                </Grid>
            </Row>

            <Row style={{paddingTop: '15px'}}>
                <Button style={{ backgroundColor: "blue"}}>
                    Log In
                </Button>            
            </Row>

            <Row style={{paddingTop: '15px'}}>
                <div style={{color: "#808080"}}> _____________________________ or ____________________________ </div>            
            </Row>
    
            <Row style={{paddingBlock: '10px'}}>
                {/* <Button className="btn-google" href="/auth/google" >
                    Continue with Google
                </Button> */}
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

            </Row>
        </Container>
        </>
        
        
    )
}


