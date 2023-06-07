import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import CurrentOrder from './CurrentOrder'
import Actions from './Actions'
import ListOfItems from './ListOfItems'
import Notifications from './Notifications'

const Content = () => {
  const tabs = ['Items', 'Transactions', 'Current Orders']

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
      style={{ transform: 'translateY(-100px)' }}
    >
      <Tabs>
        <TabList px={5}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'brand.dark', borderColor: 'brand.blue' }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <ListOfItems />
          </TabPanel>
          <TabPanel>
            <Notifications />
          </TabPanel>
          <TabPanel>
            <CurrentOrder />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Actions />
    </Box>
  )
}

export default Content
