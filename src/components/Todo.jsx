import React, {useState} from "react"


function Todo(props) {
  
   const [input, setInput] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setInput("")
    }
  
    const handleChange= (event) => {
        setInput(event.target.value)

    }
  
  
    return (
    <div>
      <li>
        {<form onSubmit={(handleSubmit)}>
            <input type="checkbox" id={props.id}/>
            {props.desc}
            <div className="btn-group">
            <button type="button">Edit</button>
            <button type="button" onClick={() => props.deleteTodo(props.id)}>Delete</button>
            </div>
        </form>}
        <form onSubmit={(handleSubmit)}>
            <label>New name for todo {props.desc}</label>
            <input 
                type="text" 
                id={props.id}
                onChange={handleChange} 
                value={input}/>
            {props.desc}
            <div className="btn-group">
            <button type="button"onClick={() => props.editTodo(props.id, input)} >Edit</button>
            <button type="button" onClick={() => props.deleteTodo(props.id)}>Delete</button>
            </div>
        </form>
      </li>
    </div>
  );
}

export default Todo;
