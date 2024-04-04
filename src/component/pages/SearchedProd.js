
import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import StockBadge from "../StockBadge";
import CartButton from "../CartButton";
import Rating from "../Rating";

import {  useDispatch,useSelector } from "react-redux";
import {addFav} from "../../ReduxStore/favouriteSlice"
import {removeFav} from "../../ReduxStore/favouriteSlice"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const SearchedProd=({name})=>{

const [prodList,setSearchTitleProd]=useState([])
const[isLoading,setLoading]=useState(true)

    useEffect(()=> {axios.get(`https://dummyjson.com/products/search?q=${name}`)
    .then(res=>{setSearchTitleProd(res.data.products);
        setLoading(false);
        console.log(res.data)})
        .catch(error=>{console.log('FetchError:',error)})},[name])

        const favouriteList = useSelector((state) => state.favourite.value)
        const dispatch = useDispatch()
    
        const handleAddFav = (element) => {
     const favItem= favouriteList.find(item=>item===element)
    const indexFavItem=favouriteList.indexOf(favItem)
    console.log(indexFavItem)
       !favItem&&dispatch(addFav(element))
    favItem&&dispatch(removeFav(indexFavItem))
    console.log(favouriteList)
        }

 return(
<>
    {isLoading&&<p className="h4">Loading...</p>}

    {prodList.length!==0?
    prodList.map((element,index)=>
     < div className='col-lg-3 col-md-4 col-sm-5   position-relative z-0 col-xs-2   mt-4'>
     
    {favouriteList.includes(element) ? <FaHeart  onClick={() => handleAddFav(element)} color='#424290' 
                                        style={{ right: "10%", top: "10px" }} className='position-absolute  z-1 translate-middle-x ' /> 
                                        : <FaRegHeart onClick={() => handleAddFav(element)} color='#424290'
                                         style={{ right: "10%", top: "10px" }} className='position-absolute  z-1 translate-middle-x ' />}

                                    <Link to={`/productDetails/${element.id}`}  style={{textDecoration:"none"}}>
                                        <div className="card m-auto h-100 position-relative position-relative " key={index} >
                                        <StockBadge Style={{position:"absolute"}} stock={element.stock} />
                                            <img src={element.images[0]} class=" h-100 card-img-top" alt="..." />

                                            <div class="card-body">
                                            
                                                <div className='d-flex flex-row justify-content-between'>
                                                    <h5 class="card-title d-inline   fw-semibold">{element.title} </h5>
                                                    <p className="d-inline fw-semibold">{element.price}$</p>
                                                </div>
                                                <p class="card-text">{element.description}</p>
                                                <Rating prod={element}  />

                                            </div>
                                        </div>
                                    </Link>
                                    <CartButton  style={{transform:"translate(25px,-40px)"}} index={index} productList={prodList}/>
                                    </div>)
    : <p className="h3 text-center mt-4 ">Not Available</p>}
    </>
 )

}
export default SearchedProd;