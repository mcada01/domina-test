import React, { useEffect, useState } from "react";
import { createTask, updateTask } from "../services/TaskService";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";

const TaskRegistration: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const taskEdited = location?.state?.task ?? null;

  const handleTaskRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (taskEdited) {
        await updateTask(taskEdited.id, title, description);
      } else {
        await createTask(title, description);
      }
      setTitle("");
      setDescription("");
      alert(
        taskEdited
          ? "Tarea actualizada exitosamente"
          : "Tarea creada exitosamente"
      );
      navigate("/tasks", { replace: true });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (taskEdited) {
      setTitle(taskEdited.title);
      setDescription(taskEdited.description);
    }
  }, [taskEdited]);

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
                  <h1 className="h4 text-gray-900 mb-4">
                    {taskEdited ? "Editar" : "Registrar"} tarea
                  </h1>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleTaskRegistration}>
                  <div className="form-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Título"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Descripción"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <button
                      className="btn btn-secondary m-2"
                      onClick={() => navigate("/tasks", { replace: true })}
                    >
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

export default TaskRegistration;
