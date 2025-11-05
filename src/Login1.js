import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function Login1() {

    const[username,setusername]= useState('')
    const[password,setpassword]= useState('')

    const[oldusername, setOldUsername] = useState(localStorage.getItem("Username"))
    const[oldpassword,setOldPassword] = useState(localStorage.getItem("Password"))

     const handleLogin1 = (e)=>{
         e.preventDefault()

         if(oldusername === username && oldpassword === password ){
             toast.success("Login1 success")

             setTimeout(()=>{
                 window.location.href='/Apppage'
             },3000)
         }else{
            
             toast.error("Login1 error")

            
         }
        }
    
  return (
    <div>
        <ToastContainer/>
        <h1>Login1 page</h1>

        <form onSubmit={handleLogin1}>

            
             <input type='text'
            placeholder='Enter Username'
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            />
             <input type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />

            <button type='submit'>Login1</button>

      </form>
    </div>
    
  )

}

export default Login1

//demo 