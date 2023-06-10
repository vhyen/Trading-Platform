import { Col, Container, Row } from "react-bootstrap";
import OrderBook from "../containers/item/OrderBook";
import CandleStickChart from "../containers/item/CandleStickChart";
import OrderForm from "../containers/item/OrderForm";
import { useEffect, useState } from "react";
import NotificationToast from "../components/item/NotificationToast";
import { Item, Notification } from "../constants/types";
import { useParams } from "react-router-dom";
import APIS from "../constants/api";
import { item } from "../client/axios";

export default function ItemDetail() {
  const {item_id} = useParams()
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState<Notification>();
  const [ItemDetail,setItemDetail] = useState<Item>()

  useEffect(()=>{
      item.get<Item>(APIS.GET_ITEM+item_id)
      .then((response)=>{
        console.log(response.data)
        setItemDetail(response.data)
      })

  },[item_id]);


  if (ItemDetail === undefined) return (<></>);

  return (
   
      <Container style={{ flex: 1 }} className="m-0 p-0">
        <Row> 
          <Col sm={3}>
            <OrderBook item={ItemDetail}/>
          </Col>
          <Col sm={9} className="p-0 border">
            <Container>
              <Row>
                <CandleStickChart
                  chartHeight={400}
                  chartWidth={1040}
                  highest={33288}
                  lowest={384}
                  item_name={ItemDetail.name}
                />
                <OrderForm
                  item={ItemDetail}
                  setShow={setShow}
                  setNotification={setNotification}
                />
              </Row>
            </Container>
          </Col>
        </Row>
        <NotificationToast
          show={show}
          setShow={setShow}
          notification={notification}
        />
      </Container>

  );
}
