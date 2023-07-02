import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

		const [items, setItems]= useState([]);
		const [tareaIngresada, setTareaIngresada]= useState("");

		useEffect(() => {
			obtenerTareas()
		}, []);
	

function handleChange(event){
		setTareaIngresada(event.target.value);
		}

function handleSubmit(event){
			event.preventDefault();
			setItems([...items, tareaIngresada]);
			setTareaIngresada('');
		}	

function borrarTarea(index){
			const nuevasTareas = items.filter((tarea, i) => i !== index);
    		setItems(nuevasTareas);
		}


function obtenerTareas() {
			fetch('https://assets.breatheco.de/apis/fake/todos/user/maxischiavina')
			  .then(response => response.json())
			  .then(data => setItems([data]))
			  .catch(err => console.log(err));
		  }

function eliminarTareas() {
			fetch('https://assets.breatheco.de/apis/fake/todos/user/maxischiavina')
			  .then(response => response.json())
			  .then(data => setItems([data]))
			  .catch(err => console.log(err));
		  }


		
	

	return (
		<div className="container w-100">
      <div className="bg-light d-flex w-75 mx-auto">
		

			<form onSubmit={handleSubmit}>
				
  <div className="mb-3 w-100">
    <label for="exampleInputEmail1" className="form-label col-12"><h1 className="text-center mt-5 fs-6">Todos:</h1></label>
    <input type="task" value={tareaIngresada} onChange={handleChange} className="form-control fs-5 col-12 m-0 p-0" id="task" placeholder="What needs to be done?" />
    <div id="task" className="form-text">
		
		{items.map((item, index)=> (<p className="border m-0 fs-4 d-flex justify-content-between" key={index}>{item}
		<button 
		type="button" className="btn-close " aria-label="Close" onClick={() => borrarTarea(index)}>
		</button></p>))}
		
		</div>
		<p>{items.length} tareas left</p>
  </div>
</form>		
		</div>
		</div>
	);
};

export default Home;
