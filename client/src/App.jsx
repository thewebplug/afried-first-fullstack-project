import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <h1 className='text-green-500 font-semibold mt-4 mb-3'>To-do list</h1>
     <input type="text" />
     <ul>
      <li><input type="checkbox" name="" id="" />Work<button>delete</button></li>
      <li><input type="checkbox" name="" id="" />Work<button>delete</button></li>
      <li><input type="checkbox" name="" id="" />Work<button>delete</button></li>
     </ul>
    </>
  )
}

export default App

