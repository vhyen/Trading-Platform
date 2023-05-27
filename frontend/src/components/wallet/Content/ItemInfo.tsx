import { Card, Col, Row } from 'react-bootstrap';

export default function ItemInfo({item} : {item: any}) {
    return (
        <Card className="mb-3" style={{maxWidth: 'inherited', maxHeight: '540px'}}>
            <Row className="g-0">
                <Col md={4}>
                    <Card.Img 
                        src={item.slug} 
                        className="img-fluid rounded-start" 
                        alt="Item Image"
                        style={{maxHeight: '540px'}}
                    />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text as='div'>
                            <p>{item.description}</p>
                            <p>{item.currentPrice}</p>
                            <p><small className="text-body-secondary">{item.provider}</small></p>       
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}






 