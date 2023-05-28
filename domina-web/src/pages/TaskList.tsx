import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/TaskService";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  description: string;
}
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const tasks = await getTasks();
      setTasks(tasks);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleOpen = (item: Task) => {
    navigate("/create-task", { replace: true, state: { task: item } });
  };

  const handleDelete = async (item: Task) => {
    const confirmed = window.confirm("¿Estás seguro de eliminar la tarea?");
    if (confirmed) {
      try {
        await deleteTask(item.id);
        alert("Tarea eliminada!");
        fetchTasks();
      } catch (error: any) {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="container vh-100">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div style={{ textAlign: "right", margin: "50px 30px 30px 0px" }}>
            <button
              title="Editar"
              className="btn btn-primary btn-sm  btn-circle mr-2"
              type="button"
              onClick={(e) => navigate("/create-task", { replace: true })}
            >
              {/* <i className="bi bi-pen"></i> */}
              Nueva Tarea
            </button>
          </div>
          <div className="text-left" style={{ marginLeft: "30px" }}>
            <h1 className="h4 text-gray-900 mb-4">Listado de Tareas</h1>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {tasks.length === 0 ? (
            <p>No se encontraron tareas.</p>
          ) : (
            <div
              className="table-responsive"
              style={{ margin: "0px 30px 50px 30px" }}
            >
              <table className={"table table-bordered dataTable"}>
                <thead>
                  <tr>
                    <th className="text-nowrap">ID</th>
                    <th className="text-nowrap">Título</th>
                    <th className="text-nowrap">Descripción</th>
                    <th className="text-nowrap">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.length > 0 ? (
                    tasks.map((item, index) => (
                      <tr key={index}>
                        <>
                          <td className="text-nowrap">{item.id}</td>
                          <td className="text-nowrap">{item.title}</td>
                          <td className="text-nowrap">{item.description}</td>
                          <td>
                            <button
                              title="Editar"
                              className="btn btn-primary btn-sm btn-circle"
                              style={{marginRight: '10px'}}
                              type="button"
                              onClick={(e) => handleOpen(item)}
                            >
                              <i className="bi bi-pen"></i>
                            </button>
                            <button
                              title="Eliminar"
                              className="btn btn-danger btn-sm btn-circle"
                              type="button"
                              onClick={(e) => handleDelete(item)}
                            >
                              <i className="bi bi-archive-fill"></i>
                            </button>
                          </td>
                        </>
                      </tr>
                    ))
                  ) : (
                    <tr className="odd">
                      <td valign="top" colSpan={3} className="dataTables_empty">
                        No se encontraron registros
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskList;
