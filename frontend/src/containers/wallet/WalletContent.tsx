import SimpleBar from 'simplebar-react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../constants/ProfileHelper'
import WalletMain from '../../components/wallet/WalletMain'

export default function ProfileContent() {
  return (
      <ChakraProvider theme={theme}>
        <div style={{marginTop:'20vh'}}>
          <WalletMain />
        </div>
      </ChakraProvider>
  )
}
