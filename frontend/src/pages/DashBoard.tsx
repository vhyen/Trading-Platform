import { NavBar } from "../containers/bars";
import Footer from "../containers/bars/Footer";
import DashBoardContent from "../containers/dashboard/DashBoardContent";

export default function DashBoard(){
    return(
        <div className="vh-100" style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <NavBar/>
            <DashBoardContent/>
            <Footer/>
        </div>
    )
}