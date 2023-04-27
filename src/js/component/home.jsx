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
			const nuevasTareas = items.filter((tarea) => tarea.id !== id);
    setItems(nuevasTareas);
		}

	

	return (
		<div classNameName="text-center">
		

			<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-center"><h1 classNameName="text-center mt-5">todos</h1></label>
    <input type="task" value={tareaIngresada} onChange={handleChange} className="form-control" id="task" placeholder="What needs to be done?" />
    <div id="task" className="form-text">
		
		{items.map((item, index)=> (<p className="border m-0" key={index}>{item}<button
              type="button" className="btn-close" aria-label="Close" onClick={() => borrarTarea(index)}
            ></button></p>))}
		
		
		
		</div>
  </div>
  
</form>
			
		</div>
	);
};

export default Home;
