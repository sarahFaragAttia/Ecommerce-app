import { useLocation, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import StockBadge from "../component/StockBadge";
// import Rating from "./Rating";
import ProductAmount from "../component/ProductAmount";
import Quantity from "../component/Quantity";
import CartButton from "../component/CartButton";
import {Link} from "react-router-dom"
import Rating from "../component/Rating";
import {  useDispatch,useSelector } from "react-redux";
import {addFav} from "../ReduxStore/favouriteSlice"
import {removeFav} from "../ReduxStore/favouriteSlice"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const ProductDetails = () => {
    const params = useParams()
    const [prodDetails, setProdDetails] = useState()

    const [loading, setLoading] = useState(true)

   const [amount,setAmount]=useState()

   const handleAmount=(Amount)=>{
setAmount(Amount)
   }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.index} `)
        .then(res => {
            setProdDetails(res.data);
            setLoading(false);
        
            console.log(res.data)
        })
        .catch(error => console.log('Fetching Error:', error))
    }, []);
     
     
    const favouriteList = useSelector((state) => state.favourite.value)
    const dispatch = useDispatch()

    const handleAddFav = (prodDetails) => {
 const favItem= favouriteList.find(item=>item===prodDetails)
const indexFavItem=favouriteList.indexOf(favItem)
console.log(indexFavItem)
   !favItem&&dispatch(addFav(prodDetails))
favItem&&dispatch(removeFav(indexFavItem))
console.log(favouriteList)
    }

    return (
        <>
      {loading&&<div className="h3">Loading....</div>}
    
        <div className="container position-relative ">
        { prodDetails?<>
            <div className='row gap-2 m-auto mt-4 position-relative z-0 '>

              <div className="col  ">
            {favouriteList.includes(prodDetails)?  <FaHeart  onClick={() => handleAddFav(prodDetails)} color='#424290' 
                                        style={{ left: "0%", top: "10px" }} className='position-absolute  z-1 translate-middle-x ' /> 
                                        : <FaRegHeart onClick={() => handleAddFav(prodDetails)} color='#424290'
                                         style={{ right: "0%", top: "10px" }} className='position-absolute  z-1 translate-middle-x ' />}


            <img src={prodDetails?.images[0]} className="img-fluid"/>
            <div className="m-4 row">
         {(prodDetails?.images)&&(prodDetails.images).map((item)=>{
            return(
            
            
            <img src={item} className="col-2 img-fluid  m-1" style={{height:"100px",width:"100px"}}/>
            )})} 
            </div>
            

            </div>
            <div className="col">
            <div>
            <h2>{prodDetails?.title}</h2>
            <Rating prod={prodDetails}  />

            </div>
            <p>{prodDetails?.description}</p>
            <hr/>
            <p className="fw-semibold">{prodDetails?.price}$</p>
            <p>Suggest payment with 6 months special financing</p>
            <hr />
            <StockBadge  style={{position:'relative'}}  stock={prodDetails?.stock}/>
            <hr/>
            <ProductAmount  prod ={prodDetails} id={prodDetails?.id} stock={prodDetails?.stock}/>
            {/* <Quantity  onAdd={handleAmount} index={(prodDetails?.id)-1} stock={prodDetails?.stock}/> */}
            <hr className="m-2 gap-1"/>
            <div className="mt-4 ">
         <Link to="/cart" style={{textDecoration:"none"}}>   <button type="button"   style={{width:"40%",transform:'translatex(0) translatey(0)'}} class="btn m-4  h5 cart rounded-pill btn-outline-dark"> Buy Now</button></Link>
         <CartButton style={{width:"45%"}} Amount = {1} id={prodDetails?.id} prod={prodDetails}/>
            </div>

 </div></div>
            
            </>
            
  
       :<div> Product NoT FOUNT </div>}

</div>
        
</>

    )
}
export default ProductDetails;