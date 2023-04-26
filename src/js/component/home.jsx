import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tareaIngresada, setTareaIngresada] = useState("");
	const [lista, setLista] = useState("");
	

	function agregarTarea(event){
		event.preventDefault()
		const nuevaTarea = {id: Date.now(), texto: tareaIngresada};
		setLista([...tareas, nuevaTarea]);
		setTareaIngresada("");
	}

	return (
		<div classNameName="text-center">
			<h1 classNameName="text-center mt-5">todos</h1>

			<form onSubmit={agregarTarea}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="task" onChange={(event)=> (setTareaIngresada(event.target.value), console.log(tareaIngresada) )} className="form-control" id="task" aria-describedby="emailHelp" />
    <div id="task" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
			
		</div>
	);
};

export default Home;
