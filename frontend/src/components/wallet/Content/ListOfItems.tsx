import { Container } from 'react-bootstrap'
import ItemInfo from './ItemInfo'

export default function ListOfItems({items}: any) {
  if (items === undefined) {
    return (
      <p>no items</p>
    )
  }
  const icons = [
    'https://api.dicebear.com/6.x/bottts/svg?seed=Chester&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Tiger&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Peanut&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Abby&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Whiskers&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Felix&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Pumpkin&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Precious&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Baby&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Chloe&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Tigger&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Oliver&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Simba&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Maggie&size=52',
    'https://api.dicebear.com/6.x/bottts/svg?seed=Sasha&size=52',
  ]

  
  return (
    <Container>
      {items.map((item: any) => {
        return (
            <ItemInfo key={item.item.id} item={item} icon={icons[Math.floor(Math.random()*icons.length)]} />
        );
      })}
    </Container>
  )
}
