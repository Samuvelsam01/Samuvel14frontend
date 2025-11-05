import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Login.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from  './Common/Header';
//  import Mount from "./Images/wallpaper.jpg"
// import { IoLocationOutline } from "react-icons/io5";
// import { BsCartDash } from "react-icons/bs";

function Login() {

 const[num,setNum] = useState(0)
    //  const[Sample,setSample]=useState("hello")

    // const handleDecresment = () =>{
    //   setNum(num - 1)
    // }

//    var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };


 const handleNext = () =>{

  setTimeout(()=>{
  window.location.href = "/homepage"  
  },3000)
  
 }




  return (
    
    <div>
      {/* <Header/> */}
      <h1>This is Login page</h1>
       
       <button onClick={handleNext}>Next</button>

      {/* <button onClick={handleDecresment}>-</button> */}

      {/* <button onClick={handleIncrement}>+</button> */}

      {/* <h2>{num}</h2> */}
      {/* <h3>{Sample}</h3> */}
   
{/*       
    <div className='nav-wrap'>

      <lable>Home</lable>
      <lable>Class</lable>
      <lable>Product</lable>
      <lable>Cart</lable>
      <lable>Profile</lable>
         </div> */}
    
       {/* <h1>hello world</h1>
       <h1>hello world</h1>
        <h1>hello world</h1>
        
         <h1>hello world</h1>
          <h1>hello world</h1>
           <h1>hello world</h1>
            <h1>hello world</h1> 

             <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3> 
      </div>
    </Slider> */}


  {/* <h1>This is Login page</h1>  */}
       {/* <h2 className='welcome'>Hello World</h2>
       <img src={Mount} alt='mount'className='mount-img'/> */}
       
       {/* <IoLocationOutline className='location'/>
       
       <BsCartDash  className='cart'/>

      <a href='homepage'>
     <button>GOTO</button>
      </a>  */}
     
        </div>
      
      
    
  )
}

export default Login