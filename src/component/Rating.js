// import React, { useState,useEffect } from 'react'
// import star from '../pictures/star.svg'
// import axios from 'axios';

// // npm install react-icons and use incon
// import { FaStar } from "react-icons/fa";
// const Rating=(props,{id})=>{

//   const[Rating,setRate]=useState([{click:false},{click:false},{click:false},{click:false}])

// useEffect(()=>{ axios.put(`https://dummyjson.com/products/${id}`,JSON.stringify(Rating))
// .then(res=> {console.log(res.data)})
// .catch(error=>{console.log('fetching error:',error)})},[Rating])


//   const handleClick=(index)=>{
//     props.update?
//  setRate(prevRate => prevRate.map(
//   (item) => item == Rating[index] ? { ...item, click: !item.click } : { ...item }))
//   : setRate(Rating)
//     console.log(Rating[index]);
//   }

//   return (
//     <ul className='list-unstyled d-inline'>

// {Rating?.map((element,index)=>
//       <li className='d-inline m-1'><FaStar  key={index}  onClick={()=>handleClick(index)} style={(element.click)?{color:"yellow"}:{color:'currentcolor'}} /></li>)
//    }
//     </ul>
//   );
// }

// export default Rating;