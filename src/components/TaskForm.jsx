import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleForm = (e) => {
    e.preventDefault();
    const task = {
      title,
      descripcion,
    };
    createTask(task);

    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleForm} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-white mb-3 text-2xl font-bold">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded-sm"
          autoFocus
          required
        ></input>
        <textarea
          placeholder="Descripcion aqui..."
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2 rounded-sm"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-0 rounded-sm text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
