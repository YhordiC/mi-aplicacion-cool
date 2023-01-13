import { useState,useContext } from "react";
import  "./componentesCss/TaskForm.css"
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
  const [title, settask] = useState("");
  const [description, setdescription] = useState("");
  const {crearTarea} = useContext(TaskContext);
  function Cheked(e) {
    e.preventDefault(); // nuestro formulario no cargara la pagina de nuevo

    if (title.length <= 0 || description.length <= 0) {
      alert("Por favor llene las campos");
    } else {
      crearTarea({
        title,
        description,
      });

      settask("");
      setdescription("");
    }
  }

  return (
    <form onSubmit={Cheked} className="form">
      <p>
        Nombre de la tarea <span>*Es requerido</span>
      </p>
      <input
        type="text"
        placeholder="Titulo de la tarea"
        onChange={(e) => {
          settask(e.target.value);
        }}
        value={title}
        autoFocus
        maxLength={50}
      />
      <span>Describe su tarea *requerido</span>
      <textarea
        placeholder="Escribe la descripción de tu tarea"
        onChange={(e) => {
          setdescription(e.target.value);
        }}
        value={description}
        maxLength={100}
      ></textarea>
      <button>Sudmit</button>
    </form>
  );
}

export default TaskForm;
