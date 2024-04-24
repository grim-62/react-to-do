import React, { useContext, useState } from 'react'
import {RiAddCircleFill} from "@remixicon/react";
import { todocontext } from "../Context/Todocontext";

const Create = () => {
    
    const [tasks,settasks] = useContext(todocontext) 
    const [title, settitle] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
    
        const copyTask = [...tasks]
        copyTask.push({title,completed:false})
        settasks(copyTask)
    
        settitle("");
      }
      console.log(tasks);

  return (
    <div className='mt-4 '>
    <form className='flex items-center gap-4' onSubmit={submitHandler}>
      <input type="text" className='w-80 h-9 rounded-md p-2' onChange={(e)=>settitle(e.target.value)} value={title} placeholder='write your next task'  />
      <button className='rounded-full'>< RiAddCircleFill className="my-icon text-red-500 bg-black rounded-full text-4xl" /></button>
    </form>
  </div>
  )
}

export default Create