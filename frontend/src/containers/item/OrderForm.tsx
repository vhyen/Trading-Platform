import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import OrderLimitForm from "./OrderLimitForm";
import OrderMarketForm from "./OrderMarketForm";
import { Color } from "../../constants/color";

export default function OrderForm({item,setShow ,setNotification}:any) {
  const tabs = ["Limit", "Market"];
  return (
    <>
      <style className="text/css">
        {`    
             .custominput:focus {
                   outline:0;
                   border:none;
                   box-shadow: none;
            }
            .custom-input-group{
              border:1px solid ${Color.grey};
              border-radius:7px;
            }
            .custom-input-group:hover{
              border:1px solid ${Color.main};
              border-radius:7px;
            }
      `}
      </style>
      <Tabs px={0} backgroundColor={Color.grey}>
        <TabList>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              color={Color.form_text_second}
              border={'none'}
              borderRadius={'10px 10px 0px 0px'}
              _selected={{ color: Color.main , backgroundColor:Color.white}}
              className="px-3"
            >
              <p className="my-1" style={{width:'80px'}}>{tab}</p>
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <Row className="m-0">
              <Col className="p-0">
                <OrderLimitForm
                  type="B"
                  item={item}
                  setShow={setShow}
                  setNotification={setNotification}
                />
              </Col>
              <Col className="p-0">
                <OrderLimitForm
                  type="S"
                  item={item}
                  setShow={setShow}
                  setNotification={setNotification}
                />
              </Col>
            </Row>
          </TabPanel>
          <TabPanel>
            <Row className="m-0">
              <Col className="p-0">
                <OrderMarketForm
                  type="B"
                  item={item}
                  setShow={setShow}
                  setNotification={setNotification}
                />
              </Col>
              <Col className="p-0">
                <OrderMarketForm
                  type="S"
                  item={item}
                  setShow={setShow}
                  setNotification={setNotification}
                />
              </Col>
            </Row>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
