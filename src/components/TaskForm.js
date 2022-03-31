import { useState } from "react";

function TaskForm(props) {
	const [taskName, setTaskName] = useState("");
	const [taskDesc, setTaskDesc] = useState("");

	return (
		<div
			className='row taskform'>
                <h3>Create a new task</h3>
			<div className='row'>
				<div className='col-3'>New Task Name</div>
				<div className='col'>
					<input type='text' value={taskName} onChange={(ev) => setTaskName(ev.target.value)} />
				</div>
            </div>
            
			<div className='row'>
				<div className='col-3'>
				Description</div>
				<div className='col'>
				<input type='text' value={taskDesc} onChange={(ev) => setTaskDesc(ev.target.value)} /></div>
			</div>
				<button className='btn-primary' onClick={() => props.addTask(taskName, taskDesc)}>
					Add
				</button>
		</div>
	);
}

export default TaskForm;
