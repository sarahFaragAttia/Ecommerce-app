 import axios from "axios";
 import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";

 
 const DropDown=()=>{
  const[dropList,setDropList]=useState();




    
  
useEffect(()=>{axios.get('https://dummyjson.com/products/categories')
.then(res=>{
  setDropList(()=>res.data?.map((item)=> {return {category:item,style:{backgroundColor:"ghostwhite" ,color:"black"}}}))
console.log(dropList)})
.catch(error=>console.log('Fetching Error:',error))},[])


const handleStyle=(index)=>{
  setDropList(()=>dropList.map((item,ind)=> ind===index?{...item,style:{backgroundColor:"#424290",color:"black"}}:{...item,style:{backgroundColor:"ghostwhite" ,color:"black"}}))


  
}

    return(
    <div >

  <ul className=" row m-2 p-0" >
  {dropList?.map((item,index)=>
    <Link to={`/cat/${item.category}`} class=" col  d-inline p-0" key={index} > <span onClick={()=>handleStyle(index)} style={item.style} class="badge  category  m-2 rounded-pill">{item.category}</span></Link>
    )}
  </ul>
</div>
    )}
    export default DropDown;
  