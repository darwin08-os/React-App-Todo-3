import { useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';


function App() {


  const [tasks,setTasks] = useState([
    {title:'Learn React',completed:false},
    {title:'Learn English',completed:false},
    {title:'Learn DS Algorithm',completed:true}]);

  const handleComplete=(id)=>{
    let arr = tasks.map((obj,index)=>{
      if(index === id){
        return {...obj,completed:!obj.completed}
      }
      else{
        return obj
      }
    })
    setTasks(arr)
  }

  const handleDelete=(id)=>{
    let arr = tasks.filter((_,index)=> index !== id )
    setTasks(arr)
  }


  return (
    <div className="App">
    <TodoList/>      
    <div className="container">
    {tasks.map((obj,index)=>{
      return <TodoItem id={index} key={index} task={obj} onDelete={()=>handleDelete(index)} onComplete={()=>handleComplete(index)}/>
    })}
    </div>
    </div>
  );
}

export default App;
