import { Row } from "react-bootstrap";
import TotalInfoBox from "../../components/dashboard/TotalInforBox";

export default function TotalInfo(){
    const infos =[
        {
            id:0,
            highlight:"100.000$",
            description:"24h trading volume on Binance exchange",
        },
        {
            id:1,
            highlight:"100.000$",
            description:"24h trading volume on Binance exchange",
        },
        {
            id:2,
            highlight:"100.000$",
            description:"24h trading volume on Binance exchange",
        },{
            id:2,
            highlight:"100.000$",
            description:"24h trading volume on Binance exchange",
        }
    ]
    return(
        <Row className="my-5 p-3" style={{backgroundImage:"url(bg-total.jpeg)",backgroundSize:"cover"}}>
            {infos.map((info:any)=>{return(<TotalInfoBox key={info.id} highlight={info.highlight} description={info.description}/>)})}
        </Row>
    )
}