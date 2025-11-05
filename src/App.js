import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function App() {

  const[oldusername, setOldUsername] = useState(localStorage.getItem("Username"))

  useEffect(()=>{
    toast.success("welcome  " + oldusername)
  },[])

  return (
    <div>
      <ToastContainer/>
      <h1>App page</h1>
    </div> 

  )
}

export default App
