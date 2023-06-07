import { Container, Table } from "react-bootstrap";
import BuyOrderTable from "../../components/item/BuyOrderTable";
import SellOrderTable from "../../components/item/SellOrderTable";
import { Color } from "../../constants/Color";
import { useEffect, useState } from "react";
import { Pagination,Record } from "../../constants/types";
import { order } from "../../client/axios";
import APIS from "../../constants/api";

export default function OrderBook({item}:any) {
  const [sellRecords,setSellRecords] = useState<Record[]>([])
  const [buyRecords,setBuyRecords] = useState<Record[]>([])

  useEffect(()=>{
    order.get<Pagination<Record>>(APIS.SELL_ORDER_BOOK + item?.name)
    .then((response)=>{
        console.log(response.data.count)
        setSellRecords(response.data.results)
    })
  },[item])
  useEffect(()=>{
    order.get<Pagination<Record>>(APIS.BUY_ORDER_BOOK + item?.name)
    .then((response)=>{
        console.log(response.data.count)
        setBuyRecords(response.data.results)
    })
  },[item])
  const currentPrice=30;
  const lastPrice=20;
  return (
    <>
      <style className="text/css">
        {`
        `}
      </style>
      <Table  variant="light" className="m-0">
      <thead>
          <tr>
            <th style={{fontSize: `0.8rem`, textAlign: `start`, width: ``}}>Price</th>
            <th style={{fontSize: `0.8rem`, textAlign: `end`}}>Quantity</th>
            <th style={{fontSize: `0.8rem`, textAlign: `end`}}>Total</th>
          </tr>
        </thead>
      </Table>
      <SellOrderTable records={sellRecords} />
      <Container className="my-2 align-items-center">
            <p
              className="d-inline-flex current-price m-0"
              style={{
                fontSize:'1.2rem',
                color:
                currentPrice > lastPrice
                ? Color.text_green
                : currentPrice < lastPrice
                ? Color.text_red
                : "",
              }}
            >
              {currentPrice}{ currentPrice > lastPrice ? '↑' :  currentPrice < lastPrice ? '↓': ''}
            </p>
            <p className="d-inline-flex m-0 mx-3" style={{fontSize:'0.8rem'}}>${lastPrice}</p>
      </Container>
      <BuyOrderTable records={buyRecords} />
    </>
  );
}
