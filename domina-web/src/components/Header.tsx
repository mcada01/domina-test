import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <h1>Prueba Domina</h1>
          <div style={{ textAlign: "right" }}>
            <Link className="dropdown-item" onClick={onLogout} to="/#">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
