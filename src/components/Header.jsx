import React, { useContext } from 'react'
import {todocontext} from '../Context/Todocontext'

const Header = () => {
  const [tasks] = useContext(todocontext);
    
  return (
    <div className='h-52 w-96 rounded-lg border-4 flex  items-center justify-center gap-10'>
    <div>
      <h1 className='text-white font-bold text-2xl '>TODO DONE</h1>
      <p className='font-mono text-slate-300 font-se text-m'>keep it up</p>
    </div>
    <div className='bg-red-500 h-20 w-20 rounded-full flex items-center justify-center text-2xl font-bold'>{tasks.filter((e)=>e.completed === true).length}/{tasks.length}</div>
  </div>
  )
}

export default Header