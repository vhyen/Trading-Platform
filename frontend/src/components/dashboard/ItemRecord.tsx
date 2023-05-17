import { Col, Row } from "react-bootstrap";

export default function ItemRecord({item}:any){
    return(
        <Row className="py-1">
            <Col>{item.name}</Col>
            <Col>{item.price}</Col>
            <Col>{item.change}</Col>
            <Col>{item.marketcap}</Col>
        </Row>
    )

}