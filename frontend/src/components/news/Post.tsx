import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Post({item}: any) {
    const [isReadMore, setIsReadMore] = useState(true)
    const toogleReadMore = () => {
        setIsReadMore(!isReadMore)
    }
    const text = item.content

    return (
        <>
            <style className='text/css'>
                {`     
                    .read-or-hide{
                        color: rgb(192,192,192);
                        cursor: pointer;
                    }
                `}
            </style>

            <Row style={{marginTop: '20px'}}>
                <Card style={{ width: 'inherited' }}>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        
                        <Card.Text>
                            {isReadMore ? text.substring(0, 250) : text}
                            <span onClick={toogleReadMore} className='read-or-hide'>
                                {isReadMore ? ' ... More' : ' Less'} 
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </>
        
    )
}