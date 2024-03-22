import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
const ProductDetails = () => {
    const params = useParams()
    const [prodDetails, setProdDetails] = useState()

    const [loading, setLoading] = useState(true)



    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.index} `)
        .then(res => {
            setProdDetails(res.data);
        
            console.log(res.data)
        })
        .catch(error => console.log('Fetching Error:', error))
    }, []);

    return (
      
        <div className="container">
            <div className='row gap-4 m-auto mt-4'>
            <h2>{prodDetails?.title}</h2>
         {(prodDetails?.images)&&(prodDetails.images).map((item)=>{
            return(
            
            
            <img src={item} className="col-1"/>
            )})} 
            
          
            </div>
            
  
       

</div>
        


    )
}
export default ProductDetails;