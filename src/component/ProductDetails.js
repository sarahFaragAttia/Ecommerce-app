import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import StockBadge from "./StockBadge";
// import Rating from "./Rating";
import ProductAmount from "./ProductAmount";
import Quantity from "./Quantity";
import CartButton from "./CartButton";
import {Link} from "react-router-dom"
const ProductDetails = () => {
    const params = useParams()
    const [prodDetails, setProdDetails] = useState()

    const [loading, setLoading] = useState(true)

   const [amount,setAmount]=useState()

   const handleAmount=(Amount)=>{
setAmount(Amount)
console.log("fina",amount)
   }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.index} `)
        .then(res => {
            setProdDetails(res.data);
        
            console.log(res.data)
        })
        .catch(error => console.log('Fetching Error:', error))
    }, []);
    

    return (
      
        <div className="container position-relative">
            <div className='row gap-2 m-auto mt-4'>
              <div className="col">
            <img src={prodDetails?.images[0]} className="img-fluid"/>
            </div>
            <div className="col">
            <h2>{prodDetails?.title}</h2>
            <p>{prodDetails?.description}</p>
            <hr/>
            <p className="fw-semibold">{prodDetails?.price}$</p>
            <p>Suggest payment with 6 months special financing</p>
            <hr />
            <StockBadge  style={{position:'relative'}}  stock={prodDetails?.stock}/>
            <hr/>
            {/* <ProductAmount index={(prodDetails?.id)-1} stock={prodDetails?.stock}/> */}
            <Quantity  onAdd={handleAmount} index={(prodDetails?.id)-1} stock={prodDetails?.stock}/>
            <hr className="m-2 gap-1"/>
            <div className="mt-4 ">
         <Link to="/cart">   <button type="button"   style={{width:"50%",transform:'translatex(0) translatey(0)'}} class="btn  w-50 h5 cart rounded-pill btn-outline-dark"> Buy Now</button></Link>
<CartButton  index={(prodDetails?.id)-1} prodDetails={prodDetails} Amount={amount} style={{width:"50%",transform:'translatex(0) translatey(0)'}} />
            </div>

 </div></div>
<div className="m-4 row">
         {(prodDetails?.images)&&(prodDetails.images).map((item)=>{
            return(
            
            
            <img src={item} className="col-2 img-fluid  m-1" style={{height:"100px",width:"100px"}}/>
            )})} 
            </div>
            
          
            
  
       

</div>
        


    )
}
export default ProductDetails;