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
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { addFav } from "../ReduxStore/favouriteSlice"
import { removeFav } from "../ReduxStore/favouriteSlice"
import { useDispatch, useSelector } from "react-redux";


const SearchedCat = ({ cat }) => {

    const [catList, setCatList] = useState()
    const [isLoading, setLoading] = useState(true)
    const params = useParams()

    const [prodValue, setProdValue] = useState()
    const SearchProduct = (value) => {
        setProdValue(value)
    }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${params.cat}`)
            .then(res => {
                setCatList(res.data.products);
                setLoading(false)

            })
            .catch(err => console.log('Fetching Error:', err))
    }, [params])

    const favouriteList = useSelector((state) => state.favourite.value)
    const dispatch = useDispatch()
    const handleAddFav = (element) => {

        if (favouriteList.includes(element)) {
            const favIndex = favouriteList.indexOf(element)
            return dispatch(removeFav(favIndex))
        }
        else { dispatch(addFav(element)) }

    }


    return (<>



        <div className='container m-auto'>

            <InputSearch onAdd={SearchProduct} />
            <DropDown />
            {isLoading && <p className="h3">Loading</p>}
            <div className="row ">
                {prodValue ? <SearchedProd name={prodValue} /> :
                    catList?.map((element, index) =>
                        < div className='col-lg-3 col-md-4 col-sm-6 col-6  z-0 position-relative  col-xs-10   mt-4'>
                            {favouriteList.includes(element) ?
                                <FaHeart onClick={() => handleAddFav(element, index)} color='#424290'
                                    style={{ right: "10%", top: "10px" }} className='position-absolute  z-1 translate-middle-x ' />
                                : <FaRegHeart onClick={() => handleAddFav(element, index)} color='#424290'
                                    style={{ right: "10%", top: "10px" }} className='position-absolute  z-1 translate-middle-x ' />}

                            <Link to={`/productDetails/${element.id}`} style={{ textDecoration: "none" }} >
                                <div className="card w-100 m-auto h-100 position-relative position-relative " key={index} >
                                    <StockBadge Style={{ position: "absolute" }} stock={element.stock} />

                                    <img src={element.images[0]} class=" h-100 card-img-top" alt="..." />

                                    <div class="card-body">

                                        <div className='d-flex flex-row justify-content-between'>
                                            <h5 class="card-title d-inline   fw-semibold">{element.title} </h5>
                                            <p className="d-inline fw-semibold">{element.price}$</p>
                                        </div>
                                        <p class="card-text">{element.description}</p>
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
