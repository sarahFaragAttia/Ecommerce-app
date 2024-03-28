
import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import StockBadge from "./StockBadge";
import CartButton from "./CartButton";
const SearchedProd=({name})=>{

const [prodList,setSearchTitleProd]=useState([])
const[isLoading,setLoading]=useState(true)

    useEffect(()=> {axios.get(`https://dummyjson.com/products/search?q=${name}`)
    .then(res=>{setSearchTitleProd(res.data.products);
        setLoading(false);
        console.log(res.data)})
        .catch(error=>{console.log('FetchError:',error)})},[])



 return(
<>
    {isLoading&&<p className="h4">Loading...</p>}

    {prodList?prodList.map((element,index)=>

        < div className='col-xl-3 p-0  col-md-4 col-sm- mt-4'>
                                    <Link to={`/productDetails/${element.id}`} >
                                        <div className="card  h-100 position-relative position-relative " key={index} style={{ width: "18rem" }}>
                                            <StockBadge stock={element.stock} />
                                            <img src={element.images[0]} class=" h-100 card-img-top" alt="..." />

                                            <div class="card-body">
                                            
                                                <div className='d-flex flex-row justify-content-between'>
                                                    <h5 class="card-title d-inline   fw-semibold">{element.title} </h5>
                                                    <p className="d-inline fw-semibold">{element.price}$</p>
                                                </div>
                                                <p class="card-text">{element.description}</p>
                                            </div>
                                        </div>
                                        {/* <Rating update={false} id={index} /> */}
                                    </Link>
                                    <CartButton index={index} productList={prodList}/>
                                    </div>








    

    )
    :<p className="h3">Not Available</p>}
    </>
 )

}
export default SearchedProd;