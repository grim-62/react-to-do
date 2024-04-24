import React, { useState } from 'react'

import '../src/index.css'
import Header from './components/Header'
import Create from './components/Create'
import Show from './components/Show'

const App = () => {
 
  const [tasks, settasks] = useState([]);
    
  return (
    <div className='w-screen h-screen bg-zinc-900 flex flex-col pt-[50px] justify-start items-center' >

     <Header />
     <Create />
     <Show />
        
    </div>
  );

}

export default App