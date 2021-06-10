import Task from './Task'

// using map to make html elements for each array item
// warning: each child in list must have unique key prop:
//          give each parent (h3) a key/task id

// every const state piece: name (tasks), function to update piece (setTasks),
//                          starting value in useState() is default value
// state is immutable, you basically create it + send it down
// to add another task, add the new task to what's already there

// tasks is a prop
const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <div>
            {tasks.map((task)=> (<Task key={task.id} task={task} 
            onDelete={onDelete} onToggle={onToggle}/>))}
        </div>
    )
}

export default Tasks