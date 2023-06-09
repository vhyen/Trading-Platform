import { Container } from "react-bootstrap";
import { Color } from "../../constants/color";
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
                border:none;
            }
            .btn-start-earn:hover{
                background-color:${Color.main_glow};
                color:${Color.muted};
                font-size: 1.2rem;
                font-weight:normal;
                border:none;
            }
        `}
      </style>
      <Container fluid className="d-inline-flex flex-column align-items-center justify-content-center start-earn mt-5">
            <p className="text-center">Start earn today</p>
            <NavLink to="/signup" className="btn-start-earn rounded"><p className="text-center p-2 px-5 m-0">Sign Up Now</p></NavLink>
      </Container>
    </>
  );
}
