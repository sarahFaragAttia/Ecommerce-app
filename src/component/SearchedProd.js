
import axios from "axios"
import { useState,useEffect } from "react"
const SearchedProd=({name})=>{

const [Prod,setSearchTitleProd]=useState([])
const[isLoading,setLoading]=useState(true)

    useEffect(()=> {axios.get(`https://dummyjson.com/products/search?q=${name}`)
    .then(res=>{setSearchTitleProd(res.data.products);
        setLoading(false);
        console.log(res.data)})
        .catch(error=>{console.log('FetchError:',error)})},[])



 return(
<>
    {isLoading&&<p className="h4">Loading...</p>}

    {Prod?Prod.map((element,index)=>
        <div  className='col-xl-3 p-0  col-md-4 col-sm- mt-4'>   

        <div className="card    " key={index} style={{ width: "18rem" }}>

        <img src={element.images[0]} class="card-img-top" alt="..." />

        <div class="card-body">

            <h5 class="card-title">{element.title}</h5>

            <p class="card-text">{element.description}</p>

            <p>{element.price}</p>
        </div>
    </div>
</div>

    )
    :<p className="h3">Not Available</p>}
    </>
 )

}
export default SearchedProd;