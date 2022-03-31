import CloseButton from "./closebutton"

const TaskLine = ({task, onCheck, onDelete}) => {
    return (
        <div style={{position:"relative"}}>
        <CloseButton onClick={(ev) => onDelete(ev, task)}/> 
        <div className={task.checked ? "taskline checked" : "taskline"} key={task.id} style={{}}>            
            <h2>
                {task.title}
            </h2>
            <p>    <input type="checkbox" checked={task.checked} onChange={(ev) => onCheck(ev, task)}/>
            {task.description}</p>
        </div>
        </div>
    )
}

export default TaskLine;