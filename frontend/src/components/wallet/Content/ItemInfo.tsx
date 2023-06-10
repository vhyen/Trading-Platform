import { Img } from '@chakra-ui/react';
import { Card, Col, Row } from 'react-bootstrap';
import { Color } from '../../../constants/Color';

interface OwnedItem {
    name: string,
    icon?: string,
    amount?: number,
}


export default function ItemInfo({item, icon} : any) {
    return (
            <Row 
            className="g-0 py-3" 
            style={{
                backgroundColor: Color.form_text_primary,
                marginBottom: '8px',
                alignSelf: 'center',
                borderRadius: '10px',
                paddingLeft: '10%',
                paddingRight: '10%',
            }}
            >
                <Col md={3}>
                    <Img 
                        src={icon}
                        className="img-fluid rounded-start" 
                        alt="Item Image"
                    />
                </Col>
                <Col md={9}>
                    
                        <Row className='mx-0 h-100'>
                            <Col className='d-flex align-content-between flex-wrap flex-column'>
                            <Card.Title className='mb-1'>{item.item.name}</Card.Title>
                            <p className="mb-0 text-body-secondary small">${item.item.current_price}</p>
                            </Col>
                            <Col style={{
                                textAlign: 'end',
                            }}>
                            <Card.Title className='mb-1'>{item.quantity}</Card.Title>
                            <p className="mb-0 text-body-secondary small">${item.quantity * item.item.current_price}</p>       
                            </Col>
                        </Row>
                   
                </Col>
            </Row>
    )
}






 