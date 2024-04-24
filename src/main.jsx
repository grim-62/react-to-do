import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Todocontext from "./Context/Todocontext.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
    <Todocontext>
        <App/>
    </Todocontext>
)
