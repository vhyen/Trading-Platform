import { Dropdown, DropdownButton, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import LOCAL_STORAGE_KEYS from "../../constants/local_storage";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { removeAccount, removeToken } from "../../redux/user/slice";
import { Color } from "../../constants/Color";
import { GiftFilled } from '@ant-design/icons';

export default function Authenticate() {
  const navigate = useNavigate();
  const account = useAppSelector((state) => state.user.account);
  const dispatch = useAppDispatch();
  return (
    <>
      <style type="text/css">
        {`
            .login-nav{
                text-decoration:none;
                color:${Color.primary};
                font-size:0.8rem;
            }
            .login-nav:hover{
                color:${Color.main};

            }
            .signup-nav{
                text-decoration:none;
                flex-direction:row;
                display:flex;
                align-items:center;
                color:${Color.primary};
                background-color:${Color.main};
                border-radius:10px;
                font-size:0.8rem;
            }
            .signup-nav:hover{
                color:${Color.primary};
                background-color:${Color.main_glow};
            }
            .dropdown:hover>.dropdown-menu {
                display: block;
              }
              
              .dropdown>.dropdown-toggle:active {
                pointer-events: none;
              }
        `}
      </style>
      <Nav className="justify-content-end">
        {account ? (
            <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><p className="dropdown-item" >Wallet</p></li>
              <li><button className="dropdown-item">Log out</button></li>
             
            </ul>
          </div>
        //   <DropdownButton
        //     align={{ lg: "end" }}
        //     title="Menu"
        //     id="dropdown-menu-align-responsive-1"
        //     variant="login"
        //   >
        //     <Dropdown.Item
        //       onClick={() => {
        //         localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN_KEY);
        //         dispatch(removeToken());
        //         dispatch(removeAccount());
        //         navigate("/");
        //       }}
        //     >
        //       Log out
        //     </Dropdown.Item>
        //     <div className="dropdown-divider"></div>
        //     <Dropdown.Item onClick={() => navigate(`/user/profile`)}>
        //       {" "}
        //       Profile{" "}
        //     </Dropdown.Item>
        //   </DropdownButton>
        ) : (
          <>
            <NavLink className='login-nav mx-2 p-2' to='/login'><p className="m-0">Log In</p></NavLink>
            <NavLink className='signup-nav mx-2 p-2' to='/signup'><GiftFilled /><p className="m-0 mx-1">Register</p></NavLink>
          </>
        )}
      </Nav>
    </>
  );
}
