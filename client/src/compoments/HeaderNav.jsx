import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../headernav.css";
import { logOut } from "../redux/actions/userActions";

const HeaderNav = () => {
  const { isAuth, user } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const logoutFun = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <h4>logo</h4>
          </div>

          <Link className="menu" to={"/"}>
            Acceuil
          </Link>
          <Link className="menu" to={"/services"}>
            Services
          </Link>
          <Link
            className="menu"
            to={
              user && user.userRole === "admin"
                ? "/admin/rendezvous"
                : "/client/rendezvous"
            }
          >
            Rendez-vous
          </Link>
          <Link className="menu" to={"/Contact us"}>
            Contact us
          </Link>

          {!isAuth ? (
            <div className="buttons">
              <Link to="/register">
                <button id="registre" style={{ margin: "5px" }}>
                  Inscription
                </button>
              </Link>

              <Link to="/login">
                <button id="login">Connexion</button>
              </Link>
            </div>
          ) : (
            <div className="buttons" style={{ margin: "5px" }}>
              <button id="logout" onClick={() => logoutFun()}>
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;
