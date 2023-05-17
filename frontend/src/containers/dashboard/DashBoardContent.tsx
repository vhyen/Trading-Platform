import { Container} from "react-bootstrap";
import TotalInfo from "./TotalInfo";
import PopularItems from "./PopularItems";

export default function DashBoardContent() {
  return (
    <Container style={{ flex: 1 }}>
        <TotalInfo/>
        <PopularItems/>
        <div style={{height:"500px"}}></div>
    </Container>
  );
}
