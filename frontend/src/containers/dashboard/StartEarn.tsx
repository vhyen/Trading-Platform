import { Container } from "react-bootstrap";
import { Color } from "../../constants/Color";
import { NavLink } from "react-router-dom";

export default function StartEarn() {
  return (
    <>
      <style>
        {`
            .start-earn{
                height:250px;
                background-color:${Color.muted};
                font-size: 2.5rem;
                font-weight:bold;
            }
            .btn-start-earn{
                text-decoration:none;
                background-color:${Color.main};
                color:${Color.primary};
                font-size: 1.2rem;
                font-weight:normal;
                width:20%;
                border:none;
            }
            .btn-start-earn:hover{
                background-color:${Color.main_glow};
                color:${Color.muted};
                font-size: 1.2rem;
                font-weight:normal;
                width:20%;
                border:none;
            }
        `}
      </style>
      <Container fluid className="d-inline-flex flex-column align-items-center justify-content-center start-earn mt-5">
            <p className="text-center">Start earn today</p>
            <NavLink to="/signup" className="btn-start-earn "><p className="text-center m-2">Sign Up Now</p></NavLink>
      </Container>
    </>
  );
}
