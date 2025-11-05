import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Login1 from './Login1'
import App from './App'
function Routers() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path='/Apppage'element={<App/>}/>
         <Route path='/Signuppage'element={<Signup/>}/>  
        <Route path='/homepage' element={<Home/>}/>
        <Route path='/loginpage' element={<Login/>}/>
          <Route path = '/login1page'element={<Login1/>}/>  
        </Routes>
        </Router>
    </div>
  )
}

export default Routers;