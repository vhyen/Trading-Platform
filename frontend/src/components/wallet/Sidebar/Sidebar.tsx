import { Box } from '@chakra-ui/react'

import Data from './Data'
import Profile from './Profile'
import { AccountDetail } from '../../../constants/types'

function Sidebar({data} : {data: AccountDetail | undefined}) {
  return (
    <Box
      as="aside"
      flex={1}
      mr={{ base: 0, md: 5 }}
      mb={{ base: 5, md: 0 }}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="brand.light"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Profile />
      <Data data={data}/>
    </Box>
  )
}

export default Sidebar
