import { Box, } from '@chakra-ui/react'
import { Button } from 'react-bootstrap'

function Actions() {
  return (
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button>Update</Button>
    </Box>
  )
}

export default Actions
