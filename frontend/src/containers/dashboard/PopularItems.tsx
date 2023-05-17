import { Col, Container, Row } from "react-bootstrap"
import ItemRecord from "../../components/dashboard/ItemRecord"

export default function PopularItems(){
    const items = [{
        id:0,
        name: 'BNB',
        price:"$309.1",
        change:"0.27%",
        marketcap:"$50123M"
    },
    {
        id:1,
        name: 'BNB',
        price:"$309.1",
        change:"0.27%",
        marketcap:"$50123M"
    },
    {
        id:2,
        name: 'BNB',
        price:"$309.1",
        change:"0.27%",
        marketcap:"$50123M"
    },
    {
        id:3,
        name: 'BNB',
        price:"$309.1",
        change:"0.27%",
        marketcap:"$50123M"
    },
]
    return(
        <Container>
            <Row className="py-1 border-bottom">
                <Col>Name</Col>
                <Col>Price</Col>
                <Col>24h Change</Col>
                <Col>Market Cap</Col>
            </Row>
            {items.map((item:any)=>{return(<ItemRecord key={item.id} item={item}/>)})}
        </Container>
    )
}