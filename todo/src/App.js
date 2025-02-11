import { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';


function App() {

  const [userInput,setUserInput] = useState('')
  const [filterName,setFilter] = useState('All')
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

  const addtodo=()=>{
    if(userInput === '') return;
    let newobj= {
      title:userInput,
      completed:false
    }
    setTasks([...tasks,newobj]);
    setUserInput('')

  }

  const handleUserInput=(value)=>{
    setUserInput(value)
  }

  const filterApply=(val)=>{
    setFilter(val)
  }

  const filteredTodo = tasks.filter((obj)=>{
    if(filterName === 'completed'){
      return obj.completed
    }
    if(filterName === 'not completed'){
      return !obj.completed
    }
    return true;
  })

  const handleEdit=(index)=>{
    let newtitle = prompt("Edit your todo");
    let arr = tasks.map((obj,id)=>{
      if(index === id){
        return {...obj,title:newtitle}
      }
      return obj;
    })
    setTasks(arr)
  }


  return (
    <div className="App">
    <TodoList onADD={addtodo} userInput={userInput} useInp={handleUserInput} />

    <div className="filter">
    <select onChange={(e)=>filterApply(e.target.value)} >
        <option value="All">All</option>
        <option value="completed">completed</option>
        <option value="not completed">not completed</option>
      </select> 
      </div>    
    <div className="container">
      
    {filteredTodo.map((obj,index)=>{
      return <TodoItem onEdit={()=>handleEdit(index)} id={index} key={index} task={obj} onDelete={()=>handleDelete(index)} onComplete={()=>handleComplete(index)}   />
    })}
    </div>
    </div>
  );
}

export default App;
