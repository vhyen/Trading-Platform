import { Container, Row } from "react-bootstrap";
import TotalInfoBox from "../../components/dashboard/TotalInforBox";
import { useAppSelector } from "../../redux/store";

import SignUpNow from "../../components/dashboard/SignUpNow";

export default function TotalInfo(){
    const account = useAppSelector((state) => state.user.account);
    const infos =[
        {
            id:0,
            highlight:"$38 million",
            description:"24h trading volume on Binance exchange",
        },
        {
            id:1,
            highlight:"50+",
            description:"Cryptocurrencies listed",
        },
        {
            id:2,
            highlight:"100+",
            description:"Registered users",
        },{
            id:3,
            highlight:"< 0.01%",
            description:"Lowest transaction fees",
        }
    ]
    return(
        <Container fluid className='mb-5 p-0 pb-3'style={{backgroundImage:"url(bg-total.jpeg)",backgroundSize:"cover"}}>
        {account == undefined &&
        <SignUpNow/>
        }
        <Container className="my-3 pt-5">
        <Row>
            {infos.map((info:any)=>{return(<TotalInfoBox key={info.id} highlight={info.highlight} description={info.description}/>)})}
        </Row>
        </Container>
        </Container>
    )
}