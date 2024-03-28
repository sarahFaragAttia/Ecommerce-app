import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StockBadge from "./StockBadge";
import NavBar from "./NavBar"
import InputSearch from "./InputSearch"
import DropDown from "./DropDown";
import SearchedProd from "./SearchedProd";

import CartButton from "./CartButton";

const SearchedCat = ({ cat }) => {

    const [prodList, setCatList] = useState()
    const [isLoading, setLoading] = useState(true)
    const params = useParams()
    console.log(params)
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${params.cat}`)
            .then(res => {
                setCatList(res.data.products);
                setLoading(false)
                console.log(res.data)
            })
            .catch(err => console.log('Fetching Error:', err))
    }, [])

 const [prodValue,setProdValue]=useState()
 const SearchProduct=(value)=>{
    setProdValue(value)
 }


    return (<>
        <NavBar />


        
        <div className='container m-auto'>

            <InputSearch onAdd={SearchProduct}  />
            <DropDown  />
            {isLoading && <p className="h3">Loading</p>}
            <div className="row gap-3 gap-md-5  justify-content-evenly flex-row ">
            {prodValue? <SearchedProd name={prodValue}/>:
            prodList?.map((element, index) =>
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
            )}
            </div>    
            </div>      
            </>

        )

 }

        export default SearchedCat;
