import { Col, Container, Row } from "react-bootstrap";
import ItemRecord from "../../components/dashboard/ItemRecord";
import { NavLink } from "react-router-dom";
import { Color } from "../../constants/Color";
import { useEffect, useState } from "react";
import { item } from "../../client/axios";
import APIS from "../../constants/api";
import { Item, Pagination } from "../../constants/types";

export default function PopularItems() {
  const [items,setItems]=useState<Item[]>([])

  useEffect(()=>{
    item.get<Pagination<Item>>(`${APIS.GET_ITEM}popular`)
    .then((response)=>{
      console.log(response.data.count)
      setItems(response.data.results)
    })
  },[])
  return (
    <>
    <style className="text/css">
        {`
        .more {
            text-decoration:none;
            color:${Color.muted};

        }
        .more:hover{
            color:${Color.main};
        }
        `}
    </style>
    <Container>
      <Row className="align-items-end pb-5">
        <Col>
          <p className="highlight">Popular cryptocurrencies</p>
        </Col>
        <Col>
          <NavLink
            className="more"
            to="/more"
          >
            <p className="text-end m-0">View more market {`>>`}</p>
          </NavLink>
        </Col>
      </Row>
      <Row className="my-2 border-bottom border-2">
        <Col><p className="fw-bold">Name</p></Col>
        <Col>
          <p className="fw-bold text-center">Price</p>
        </Col>
        <Col>
          <p className="fw-bold text-center">24h Change</p>
        </Col>
        <Col>
          <p className="fw-bold text-end">Market Cap </p>
        </Col>
      </Row>
      {items?.map((item: Item) => {
        return <ItemRecord key={item.uuid} item={item} />;
      })}
    </Container>
    </>
  );
}
