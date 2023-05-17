import { NavLink } from "react-router-dom";

export default function NavButton({ text, to }: any) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "border-bottom border-3 border-primary" : ""
      }
      to={to}
      style={({ isActive }) => {
        return {
          textDecoration: "none",
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "red" : "black",
          paddingTop:"25px",
          height:"100%"
        };
      }}
    >
      {text}
    </NavLink>
  );
}
