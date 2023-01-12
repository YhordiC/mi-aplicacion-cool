import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TaskContextProvaider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TaskContextProvaider>
    <App />
   </TaskContextProvaider>
    
  </React.StrictMode>,
)
