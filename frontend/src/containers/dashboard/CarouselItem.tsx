import { Carousel } from 'react-responsive-carousel';
import CarouselImage from "../../components/dashboard/CarouselImage"


export default function CarouselItem() {
    const images = [
        {
            id: 0,
            source: "logo.png",
            content: "a.png"
        },
        {
            id: 1,
            source: "carousel1.png",
            content: "b.png"
        },
        {
            id: 2,
            source: "c.png",
            content: "c.png"
        },
    ]
    return (
        <Carousel showArrows={false} showIndicators={false} showStatus={false} autoFocus={true} autoPlay={true} dynamicHeight={false} infiniteLoop={true} transitionTime={0.3}>
            {images.map((image:any)=>{return(<CarouselImage key={image.id} source={image.source} content=""/>)})}
        </Carousel>
    )
}