import React, { useState } from "react";
import { register } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register(name, lastname, username, password);
      alert("User register successfully");
      navigate("/login", { replace: true });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="container vh-100">
        <div
          className="card o-hidden border-0 shadow-lg my-5"
          style={{ width: "800px" }}
        >
          <div className="card-body p-0">
            <div className="row">
              <div className="p-5">
                <div className="text-left">
                  <h1 className="h4 text-gray-900 mb-4">Registrar usuario</h1>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleRegister}>
                  <div className="row">
                    <div className="col s12 m6">
                      <div className="form-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col s12 m6">
                      <div className="form-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apellido"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 m6">
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
                    </div>
                    <div className="col s12 m6">
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
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}
                  >
                    <button className="btn btn-secondary m-2" onClick={() => navigate("/login", { replace: true })}>
                      Cerrar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
