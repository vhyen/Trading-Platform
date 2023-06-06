import { Button, Col, Dropdown, DropdownButton, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import LOCAL_STORAGE_KEYS from "../../constants/local_storage";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { removeAccount, removeToken } from "../../redux/user/slice";
import { Color } from "../../constants/Color";
import { GiftFilled } from "@ant-design/icons";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { IoDiamond } from "react-icons/io5";


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
                border-radius: 0px 0px 5px 5px;
                border: none;
                box-shadow: 1px 3px 3px 1px #aaaaaa;
              }
              
            .dropdown>.dropdown-toggle:active {
                pointer-events: none;
            }
            .btn-user{
                width:100%;
                height:100%;
                color:${Color.primary};
                
            }
            .btn-user:hover{
                color:${Color.main};
            }
        `}
      </style>
      {account ? (
        <Col
          sm={2}
          className="h-100 d-flex flex-row align-items-center justify-content-end mx-5"
        >
          <div className="dropdown h-100">
            <Button variant="user">
              <h3>
                <FaUserCircle />
              </h3>
            </Button>
            <ul
              className="dropdown-menu px-4"
              style={{ left: "auto", right: 0, width: "300px"}}
            >
              <li className="py-2 pe-2">
                <h5 className="py-2">{account.email}</h5>

                <p className="m-0 d-flex flex-row align-items-end"
                    style={{
                        color: Color.main,
                    }} 
                ><span className="h5 pe-2 m-0"><IoDiamond/></span>{account.type == "R" && "Regular account"}{account.type=='V' && "VIP account"}</p>
              </li>
              <hr />
              <li>
                <button
                  className="dropdown-item ps-0 my-2 d-flex flex-row align-items-end"
                  onClick={() => {
                    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN_KEY);
                    dispatch(removeToken());
                    dispatch(removeAccount());
                    navigate("/");
                  }}
                >
                  <span className="h5 m-0 pe-2">
                    <BiLogOut />
                  </span>{" "}
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </Col>
      ) : (
        <Col
          sm={3}
          className="h-100 d-flex flex-row align-items-center justify-content-center"
        >
          <NavLink className="login-nav mx-2 p-2" to="/login">
            <p className="m-0">Log In</p>
          </NavLink>
          <NavLink className="signup-nav mx-2 p-2" to="/signup">
            <GiftFilled />
            <p className="m-0 mx-1">Register</p>
          </NavLink>
        </Col>
      )}
    </>
  );
}
