import { Container} from "react-bootstrap";
import TotalInfo from "./TotalInfo";
import PopularItems from "./PopularItems";
import CarouselItem from "./CarouselItem";

export default function DashBoardContent() {
  return (
    <Container style={{ flex: 1 }}>
        <TotalInfo/>
        <PopularItems/>
        <div style={{height:"500px"}}></div>
        <CarouselItem/>
    </Container>
  );
}
