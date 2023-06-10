import { Box, Text, VStack } from "@chakra-ui/react";
import { AccountDetail } from "../../../constants/types";

function Data( {data} : {data: AccountDetail | undefined}) {
  if (data == undefined) return (<></>);

  const list = [
    {
      id: 1,
      name: "Balance",
      value: data.balance,
      color: "yellow",
    },
    {
      id: 2,
      name: "Total items",
      value: data.owned_item.length,
      color: "green",
    },
    {
      id: 3,
      name: "Transactions",
      value: data.transaction.length,
      color: "cadet",
    },
  ];
  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      {list.map((item) => (
        <Box
          key={item.id}
          as="li"
          w="full"
          py={3}
          px={5}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.light"
        >
          <Text color="brand.dark">{item.name}</Text>
          <Text color={`brand.${item.color}`} fontWeight="bold">
            {item.value}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}

export default Data;
