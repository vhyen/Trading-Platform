import { NavLink } from "react-router-dom";
import { Color } from "../constants/Color";

export default function NavButton({ text, to }: any) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "px-3 border-bottom border-3 border-primary d-inline-flex align-items-center" : "px-3 d-inline-flex align-items-center"
      }
      to={to}
      style={({ isActive }) => {
        return {
          textDecoration: "none",
          display:"inline-block",
          fontWeight: "bold",
          color: isActive ? "black" : `${Color.muted}`,
          height:"100%",
          
        };
      }}
    >
        <div>{text}</div>
    </NavLink>
  );
}
