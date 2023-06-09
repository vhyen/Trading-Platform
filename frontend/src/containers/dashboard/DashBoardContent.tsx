import { Container } from "react-bootstrap";
import TotalInfo from "./TotalInfo";
import PopularItems from "./PopularItems";
import CarouselItem from "./CarouselItem";
import StartEarn from "./StartEarn";

export default function DashBoardContent() {
  return (
    <div style={{ flex: 1 }}>
      <Container fluid className="p-0">
        <TotalInfo />
        <Container>
        <CarouselItem />
        <PopularItems />
        </Container>
      </Container>
      <StartEarn/>
    </div>
  );
}
