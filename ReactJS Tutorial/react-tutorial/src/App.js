import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import Message from './components/Message'

import { useState } from 'react'
// importing a header from the components folder, header file

// React Class
class AppClass extends React.Component {
  render() {
    return <h1> Hello from a class!! </h1>
  }
}

// apparently we pass in title = 'Hello' to the function Header
// props location in <Header />
function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30 pm',
        reminder: false,
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
    { ...task, reminder:!task.reminder} : task))
  }

  return (
    <div className="App">
      <h1> Hello from React! Can I learn this? :o</h1>

    <div className="container">
      <Header title = 'Task Tracker' house = {12}/>     {/* passing down the deleteTask function */}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>    
      ) : (
        <h3>No Tasks To Show</h3>
      )}
      
      </div>
      <Message />
    </div>
  );
}

export default App;
