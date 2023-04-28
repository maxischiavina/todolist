import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

		const [items, setItems]= useState([]);
		const [tareaIngresada, setTareaIngresada]= useState("");
	

function handleChange(event){
		setTareaIngresada(event.target.value);
		}

		function handleSubmit(event){
			event.preventDefault();
			setItems([...items, tareaIngresada]);
			setTareaIngresada('');
console.log(items)
		}	
		function borrarTarea(index){
			const nuevasTareas = items.filter((tarea, i) => i !== index);
    setItems(nuevasTareas);
		}
		
	

	return (
		<div className="container w-100">
      <div className="bg-light d-flex w-75 mx-auto">
		

			<form onSubmit={handleSubmit}>
				
  <div className="mb-3 w-100">
    <label for="exampleInputEmail1" className="form-label "><h1 classNameName="text-center mt-5 fs-6">todos</h1></label>
    <input type="task" value={tareaIngresada} onChange={handleChange} className="form-control fs-5 m-0 p-0" id="task" placeholder="What needs to be done?" />
    <div id="task" className="form-text">
		
		{items.map((item, index)=> (<p className="border m-0 fs-4" key={index}>{item}<button
              type="button" className="btn-close" aria-label="Close" onClick={() => borrarTarea(index)}
            ></button></p>))}
		<p>tareas left</p>
		
		
		</div>
  </div>
  
</form>		
		</div>
		</div>
	);
};

export default Home;
