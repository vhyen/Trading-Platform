import { NavLink } from "react-router-dom";

export default function ListLink({ title, list }: any) {
  return (
    <>
      <style>
        {`
          .nav-footer{
            text-decoration:none;
            color:black;
            font-size:0.8rem
          }
        `}
      </style>
      <div>
        <h6 className="text-uppercase fw-bold">{title}</h6>
        <ul className="list-unstyled" style={{ marginBottom: 0 }}>
          {list.map((item: any) => {
            return (
              <li key={item.id}>
                <NavLink className="nav-footer" to={item.to}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
