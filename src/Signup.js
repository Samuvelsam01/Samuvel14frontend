import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  
function Signup() {
    const[fname,setfname]= useState('')
    const[lname,setlname]= useState('')
    const[username , setUsername] = useState('')
    const[pass , setPass] = useState('')

  const handleSignup = (e)=>{
    e.preventDefault()

    if(fname === '' || lname === '' || username === '' || pass === '' ){
        toast.error("pls fill all details")
    }else{
        localStorage.setItem("Username",username)
        localStorage.setItem("Password",pass)
        toast.success("Signup Success")

        setTimeout(()=>{
            window.location.href = "/Login1"
        }, 3000)
    } 
  }

  return (
    <div>
        <ToastContainer/>
        <h1>Signup page</h1>

        <form onSubmit={handleSignup}>
            <input
            type='text'
            placeholder='Enter the Firstname'
            value={fname}
            onChange={(e) =>setfname(e.target.value)}
            />
             <input
            type='text'
            placeholder='Enter the Lasttname'
            value={lname}
            onChange={(e) =>setlname(e.target.value)}
            />
             <input
            type='text'
            placeholder='Enter the Username'
            value={username}
            onChange={(e) =>setUsername(e.target.value)}
            />
             <input
            type='password'
            placeholder='Enter the Password'
            value={pass}
            onChange={(e) =>setPass(e.target.value)}
            />
           
           <button type='submit'>Sign Up</button>
            </form>
            
    </div>
  )
}

export default Signup