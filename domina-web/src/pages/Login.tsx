import React, { useState } from "react";
import { login } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await login(username, password);
      localStorage.setItem("token", response.token);
      navigate("/tasks", { replace: true });
    } catch (error: any) {
      alert("Usuario o contraseña incorrecta");
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="container vh-100">
        <div className="row vh-100 justify-content-center align-items-center">
          <div
            className="col-xl-10 col-lg-12 col-md-9"
            style={{ width: "500px" }}
          >
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Iniciar sesión</h1>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleLogin}>
                      <div className="form-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Usuario"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group mb-2">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Contraseña"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div
                        className="justify-content-center align-items-center"
                        style={{ textAlign: "center", display: "flex" }}
                      >
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Ingresar
                        </button>
                      </div>
                    </form>
                    <br />
                    <div className="text-center">
                      <label>¿Aún no tienes usuario?</label>
                      {"  "}
                      <a
                        href=""
                        onClick={(e) =>
                          navigate("/register", { replace: true })
                        }
                      >
                        {"Regístrate"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
