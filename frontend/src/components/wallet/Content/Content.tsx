import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import ListOfItems from "./ListOfItems";
import OwnedTransactions from "./OwnedTransactions";
import { AccountDetail } from "../../../constants/types";

const Content = ({data}:{data: AccountDetail | undefined}) => {
  const tabs = ["Items", "Transactions"];
  return (
    <Box
      as="main"
      flex={3}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: "translateY(-100px)" }}
    >
      <Tabs>
        <TabList px={5}>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: "transparent" }}
              _selected={{ color: "brand.dark", borderColor: "brand.blue" }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <ListOfItems items={data?.owned_item} />
          </TabPanel>
          <TabPanel>
            <OwnedTransactions transactions={data?.transaction}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Content;
