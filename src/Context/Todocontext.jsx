import React, { createContext, useState } from 'react'

export const todocontext = createContext(null)

const Todocontext = (props) => {
    const [tasks, settasks] = useState([]);
  return (
    <todocontext.Provider value={[tasks, settasks]}>
       {props.children}
    </todocontext.Provider>
  )
}

export default Todocontext