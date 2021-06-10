import  { FaTimes } from 'react-icons/fa'

// FaTimes is an 'x' icon
// backticks are for string literals
// ${} are for injecting JS code (expressions)
// if task.reminder is true, className = task reminder, if false
//       className = task (diff CSS styling)
const Task = ({ task, onDelete, onToggle }) => {

    return (
        <div className={`task ${task.reminder ?
        'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: 'red', 
            cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task