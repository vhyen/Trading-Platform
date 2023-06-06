import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { Row, Col } from "react-bootstrap";
import OrderLimitForm from "./OrderLimitForm";
import OrderMarketForm from "./OrderMarketForm";
import { Color } from "../../constants/Color";

export default function OrderForm() {
  const tabs = ["Limit", "Market"];
  


  return (
    <>
      <Tabs px={0} backgroundColor={Color.form_background_main}>
        <TabList className="mx-4 my-3">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              color={Color.form_text_second}
              backgroundColor={"transparent"}
              border={"none"}
              _selected={{ color: Color.main }}
              className="ps-0 me-3"
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          <TabPanel>
            <Row className="m-0">
              <Col className="p-0">
                <OrderLimitForm
                  button="Sell"
                  coin_unit="SJK"
                  price_unit="USDT"
                />
              </Col>
              <Col className="p-0">
                <OrderLimitForm
                  button="Buy"
                  coin_unit="SJK"
                  price_unit="USDT"
                />
              </Col>
            </Row>
          </TabPanel>
          <TabPanel>
            <Row className="m-0">
              <Col className="p-0">
                <OrderMarketForm
                  button="Sell"
                  coin_unit="SJK"
                  price_unit="USDT"
                />
              </Col>
              <Col className="p-0">
                <OrderMarketForm
                  button="Buy"
                  coin_unit="SJK"
                  price_unit="USDT"
                />
              </Col>
            </Row>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
