import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StockBadge from "../component/StockBadge";
import InputSearch from "../component/InputSearch"
import DropDown from "../component/DropDown";
import SearchedProd from "./SearchedProduct";
import CartButton from "../component/CartButton";
import Rating from "../component/Rating";
import { useSelector } from "react-redux";
import UpdateFavList from "../component/UpdateFavList";


const SearchedCat = ({ cat }) => {

    const [catList, setCatList] = useState()
    const [isLoading, setLoading] = useState(true)
    const [prodValue, setProdValue] = useState()
    const params = useParams()

    const SearchProduct = (value) => {
        setProdValue(value)
    }

    const Favourite = useSelector((state) => state.favourite?.value)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${params.cat}`)
            .then(res => {
                setCatList(() =>
                    res.data.products.map(item =>
                        Favourite?.some(element => element.id === item.id)
                            ? { ...item, fav: true }
                            : { ...item, fav: false }
                    )
                );;
                setLoading(false)

            })
            .catch(err => console.log('Fetching Error:', err))
    }, [params, Favourite])

    return (<>
        <div className='container-fluid m-auto'>

            <div className='category-dropdown mt-4'>
                <InputSearch onAdd={SearchProduct} />


                <DropDown />
            </div>
            {isLoading && <p className="h3">Loading</p>}
            <div className="row prodCard ">
                {prodValue ? <SearchedProd name={prodValue} /> :
                    catList?.map((element, index) =>


                        < div className=' card-section col-lg-2 col-md-3   col-sm-4 col-5  z-0 position-relative   mt-4 fs-7 ' style={{ height: "350px" }} >
                            <UpdateFavList
                                style={{ right: "10%", top: "10px" }} item={element} />

                            <Link to={`/productDetails/${element.id}`} style={{ textDecoration: "none" }} >
                                <div className="card w-100  ms-auto me-auto h-100 position-relative position-relative " key={index} >
                                    <StockBadge Style={{ position: "absolute" }} stock={element.stock} />
                                    <div className='h-50'>
                                        <img src={element.images[0]} class=" h-100  img-fluid card-img-top" />
                                    </div>

                                    <div class="card-body">

                                        <div className='d-flex flex-row justify-content-between'>
                                            <h6 class="card-title d-inline   mb-2    " >{element.title} </h6>
                                            <span className="d-inline fw-semibold">{element.price}$</span>
                                        </div>
                                        <article class="card-text description" >{element.description}</article>
                                    </div>
                                    <div className='position-absolute ' style={{ bottom: "50px", left: "20px" }}>
                                        <Rating prod={element} />
                                    </div>
                                </div>

                            </Link>
                            <CartButton style={{ transform: "translate(25px,-40px)" }} Amount={1} id={element?.id} prod={element} />
                        </div>




                    )}

            </div>
        </div>
    </>

    )

}

export default SearchedCat;
