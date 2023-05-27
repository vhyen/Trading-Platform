import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { useState } from 'react';

export default function CurrentOrder() {
  const [date, setDate] = useState(new Date());
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>Item Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Item name" />
      </FormControl>

      <FormControl id="lastName">
        <FormLabel>Quantity</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="0" />
      </FormControl>

      <FormControl id="phoneNumber">
        <FormLabel>Owner</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="Owner name"
        />
      </FormControl>

      <FormControl id="emailAddress">
        <FormLabel>Price</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="Price"
        />
      </FormControl>
      
      <FormControl id="city">
        <FormLabel>Date created</FormLabel>
        <SingleDatepicker
          name="date-input"
          date={date}
          onDateChange={setDate}
        />
      </FormControl>

      <FormControl id="country">
        <FormLabel>Last update</FormLabel>
        <SingleDatepicker
          name="date-input"
          date={date}
          onDateChange={setDate}
        /> 
      </FormControl>
    </Grid>
  )
}

 
