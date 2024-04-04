import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StockBadge from "../StockBadge";
import InputSearch from "../InputSearch"
import DropDown from "../DropDown";
import SearchedProd from "./SearchedProd";

import CartButton from "../CartButton";
import Rating from "../Rating";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { addFav } from "../../ReduxStore/favouriteSlice"
import { removeFav } from "../../ReduxStore/favouriteSlice"
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";


const SearchedCat = ({ cat }) => {

    // const [prodList, setCatList] = useState()
    const [isLoading, setLoading] = useState(true)
    const params = useParams()
    
    // useEffect(() => {
    //     axios.get(`https://dummyjson.com/products/category/${params.cat}`)
    //         .then(res => {
    //             setCatList(res.data.products.map(item=>{return{...item,favourite:false}}));
    //             setLoading(false)
    //             console.log(prodList)
    //         })
    //         .catch(err => console.log('Fetching Error:', err))
    // }, [params])

 const [prodValue,setProdValue]=useState()
 const SearchProduct=(value)=>{
    setProdValue(value)
 }





 const [prodList, setCatList] = useState()


 useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${params.cat}`)
        .then(res => {
            setCatList(res.data.products.map(item=>{return{...item,favoutite:false}}));
            setLoading(false)
            // console.log(prodList)
        })
        .catch(err => console.log('Fetching Error:', err))
}, [params])
  const favouriteList=useSelector((state)=>state.favourite.value)
 const dispatch=useDispatch()
 const handleAddFav=(index,element)=>{
    
    console.log(index)
    console.log(element)

//   favList.includes(element)?console.log("yes"):console.log("no"),

    if (prodList) {
        setCatList(()=>prodList.map((item, ind) => ind === index && { ...item, favourite: !item.favourite }))};
        console.log(prodList)

        const favItem= favouriteList.find(item=>item===element)
        const indexFavItem=favouriteList.indexOf(favItem)
        !favItem&&dispatch(addFav(element))
        favItem&&dispatch(removeFav(indexFavItem))
 
//    prodList&&setCatList(prodList=> prodList&& prodList.map((item, ind) => ind === index && { ...item, favourite: !item.favourite }));

// const favItem =favList.find(item=>item===element)

// const favItem =favList.find(item=>item===prodList[index])
// console.log(favItem)
//    !favItem && dispatch(addFav(prodList[index])) 
//     console.log(favList)

 }


    return (<>


        
        <div className='container m-auto'>

            <InputSearch onAdd={SearchProduct}  />
            <DropDown  />
            {isLoading && <p className="h3">Loading</p>}
            <div className="row ">
            {prodValue? <SearchedProd name={prodValue}/>:
            prodList?.map((element, index) =>
            < div className='col-lg-3 col-md-4 col-sm-5 position-relative Z-0 col-xs-2   mt-4'>
            {element.favourite? 
                                        <FaHeart  onClick={() => handleAddFav(element, index)} color='#424290' 
                                        style={{ right: "10%", top: "10px" }} className='position-absolute  z-1 translate-middle-x ' /> 
                                        : <FaRegHeart onClick={() => handleAddFav(element, index)} color='#424290'
                                         style={{ right: "10%", top: "10px" }} className='position-absolute  z-1 translate-middle-x ' />}

                                    <Link to={`/productDetails/${element.id}`} style={{textDecoration:"none"}} >
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
                                    <CartButton style={{transform:"translate(25px,-40px)"}} Amount = {1} id={element?.id} prod={element}/>

                                    </div>
            )}
            </div>    
            </div>      
            </>

        )

 }

        export default SearchedCat;
