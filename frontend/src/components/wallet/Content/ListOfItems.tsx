import { Container, Row } from 'react-bootstrap'
import ItemInfo from './ItemInfo'

export default function ListOfItems() {
  const listOfItems = [
    {
      id: '1', 
      name: 'item1', 
      slug: 'https://pbs.twimg.com/media/FsTWpaBXoAETJps.jpg', 
      description: 'des1', 
      provider: 'provA', 
      currentPrice: 12
    },
    {
      id: '2', 
      name: 'item2', 
      slug: 'https://pbs.twimg.com/media/Fr1LhnTaIAEE9DB?format=jpg&name=large', 
      description: 'des2', 
      provider: 'provA', 
      currentPrice: 20
    },
    {
      id: '3', 
      name: 'item3', 
      slug: 'https://www.manilatimes.net/manilatimes/uploads/images/2023/03/22/170811.jpg', 
      description: 'des3', 
      provider: 'provB', 
      currentPrice: 11
    },
    {
      id: '4', 
      name: 'item4', 
      slug: 'https://de.web.img2.acsta.net/c_310_420/pictures/22/10/02/16/10/0291585.jpg', 
      description: 'des4', 
      provider: 'provB', 
      currentPrice: 8
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
