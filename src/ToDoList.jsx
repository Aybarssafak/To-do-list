import React, { useState } from "react"

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updateTask = tasks.filter((_, i) => i !== index);
        setTasks(updateTask);
    }

    


    return(
        <div className="To-do-list">

            <h1>To-Do-List</h1>

            <div>
                <input 
                    type="text"
                    placeholder="Notu girin..."
                    value={newTask}
                    onChange={handleInputChange}/>
                <button
                    className="add-button"
                    onClick={addTask}>
                    Ekle
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Sil
                        </button>
                    </li>
                )}
            </ol>


        </div>
    );
}
export default ToDoList