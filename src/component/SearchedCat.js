import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";

 const SearchedCat=({cat})=>{

const[catList,setCatList]=useState  ()
const[isLoading,setLoading]=useState(true)
const params=useParams()
console.log(params)
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${params.cat}`)
        .then(res=>{setCatList(res.data.products);
            setLoading(false)
        console.log(res.data)})
        .catch(err=>console.log('Fetching Error:',err))
    },[])




    return(<>
    {isLoading&&<p className="h3">Loading</p>}
    {catList.map((element,index)=>
        <div  className='col-xl-3 p-0  col-md-4 col-sm- mt-4'>   
        <div className="card  h-100  " key={index} style={{ width: "18rem" }}>
            <img src={element.images[0]} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{element.title}</h5>
                <p class="card-text">{element.description}</p>
                <p>{element.price}</p>
            </div>
    </div>
       
        </div>  )} 
        </>

    )

 }

 export default SearchedCat;