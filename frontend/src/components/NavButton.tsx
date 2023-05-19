import { NavLink } from "react-router-dom";
import { Color } from "../constants/Color";

export default function NavButton({ text, to }: any) {
  return (
    <>
      <style className="text/css">
        {`
          .nav-bar{
            text-decoration:none;
            display:inline-flex;
            font-weight:bold;
            height:100%;
            color:${Color.muted};
            align-items:center
          }
          .active{
            color:black;
            border-bottom: 4px solid #000;
          }
          .nav-bar:hover{
            color:black;
          }
      `}
      </style>
      <NavLink
        className={({ isActive }) =>
          isActive ? " nav-bar active px-3" : " nav-bar px-3"
        }
        to={to}
      >
        <div>{text}</div>
      </NavLink>
    </>
  );
}
