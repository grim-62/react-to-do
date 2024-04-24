import React, { useContext } from 'react'
import {RiEditBoxLine,RiDeleteBinLine} from "@remixicon/react";
import { todocontext } from "../Context/Todocontext";

const Show = () => {

    const [tasks,settasks] = useContext(todocontext)

    const removeTask = (e,index)=>{
        const copytask = [...tasks]
     
        var isValid = false
        if(!copytask[e].completed)isValid = confirm("kar de delete.")   
         
        if(isValid || copytask[e].completed){
         copytask.splice(e,1)
         settasks(copytask);
        }
                 
       }

    let tasksrender = <p className='text-zinc-500 font-semibold mt-4'>No task Present</p>
    if ( tasks.length > 0 ) { 
      tasksrender = tasks.map((task, index) => {
  
      return( 
      <div className=' w-96 rounded border-2 mt-6 flex p-2 justify-between' key={index}>  
        <div className='flex gap-3 items-center'>
            <div onClick={(e)=>completeTask(e,index)} className={`${task.completed ? 'bg-green-500' : 'bg-red-500'} h-5 w-5 rounded-sm`}></div>
            <p className='text-zinc-200 text-lg font-semibold'>{task.title}</p>
        </div>
        
        <div className='flex gap-3'>
          <RiEditBoxLine className='my-icon text-zinc-300'/>
          <RiDeleteBinLine className='my-icon text-zinc-300' onClick={()=>removeTask(index,task.title)}/>
        </div>
  
      </div>
      );
    });
      
    };  

    const completeTask = (e,i)=>{
        const copyTasks = [...tasks];
        copyTasks[i].completed = !tasks[i].completed;
        settasks(copyTasks);
      }


  return (
    <>{tasksrender}</>
  )
}

export default Show