import { Container } from '@chakra-ui/layout'
import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'
import { useState, useEffect } from 'react';
import { account } from '../../client/axios';
import APIS from '../../constants/api';
import { AccountDetail } from '../../constants/types';

export default function ProfileMain() {
  const [data, setData] = useState<AccountDetail>();
  // const token = '716caf13eb4bc2bad4688a5aa392cb007054bfcf'
  // console.log(APIS.GET_ACCOUNT)
  useEffect(() => {
    account.get<AccountDetail>(APIS.GET_ACCOUNT).then(
      (res) => {
        setData(res.data);
        console.log(data);
      }
    ).catch((e) => console.log(e))
  },[])
  
  return (
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
      <Sidebar />
      <Content data={data}/>
    </Container>
  )
}