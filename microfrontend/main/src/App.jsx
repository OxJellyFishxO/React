import { useState } from 'react'

import './App.css'
import Imagen from "imagen/Imagen"
import Web from "web/Web"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Imagen />
      <Web />
    </>
  )
}

export default App
