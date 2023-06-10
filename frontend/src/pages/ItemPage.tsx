import { ItemDetail } from ".";
import { NavBar, Footer } from "../containers/bars";



export default function ItemPage() {

    return (
        <div
        className="vh-100"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
  
        <NavBar/>
        <ItemDetail/>
        <Footer/>
        </div>
    );
}