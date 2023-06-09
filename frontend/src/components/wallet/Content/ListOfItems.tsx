import { Container } from 'react-bootstrap'
import ItemInfo from './ItemInfo'

export default function ListOfItems() {
  const listOfItems = [
    {
      id: '1', 
      name: 'item1', 
      description: 'des1', 
      icon: 'https://api.dicebear.com/6.x/bottts/svg?seed=Chester&size=52',
      provider: 'provA', 
      currentPrice: 12,
      amount: 1,
      total: 12,
    },
    {
      id: '2', 
      name: 'item2', 
      icon: 'https://api.dicebear.com/6.x/bottts/svg?seed=Buster&size=52',
      currentPrice: 37.0,
      amount: 1,
      total: 37.0,
    },
    {
      id: '3', 
      name: 'item3', 
      icon: 'https://api.dicebear.com/6.x/bottts/svg?seed=Buster&size=52',
      description: 'des3', 
      provider: 'provB', 
      currentPrice: 11,
      amount: 1,
      total: 11,
    },
    {
      id: '4', 
      name: 'item4', 
      description: 'des4', 
      icon: 'https://api.dicebear.com/6.x/bottts/svg?seed=Buster&size=52',
      provider: 'provB', 
      currentPrice: 8,
      amount: 3,
      total: 24,
    }
  ]
  return (
    <Container>
      {listOfItems.map((item: any) => {
        return (
            <ItemInfo key={item.id} item={item} />
        );
      })}
    </Container>
  )
}
