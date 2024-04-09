import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import SearchedProd from './SearchedProduct';
import DropDown from '../component/DropDown';
import StockBadge from '../component/StockBadge';
import InputSearch from '../component/InputSearch';
import { useSelector, useDispatch } from "react-redux"
import { addFav } from "../ReduxStore/favouriteSlice"
import { removeFav } from "../ReduxStore/favouriteSlice"
import CartButton from '../component/CartButton';
import Pagination from '../component/Pagination';
import Rating from '../component/Rating';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";




const Home = () => {

    const products = useSelector((state) => state.cart.value)
    const [prodName, setProdName] = useState()
    const [Offset, setOffset] = useState({})

    const [isLoading, setLoading] = useState(true)
    const [prodList, SetProdList] = useState([])

    const updateOffset = (prodPage, endOffset) => {
        setOffset({ limit: prodPage, skip: endOffset })
    }

    useEffect(() => {

        axios.get(`https://dummyjson.com/products?limit=${Offset.limit}&skip=${Offset.skip}`)
            .then(res => {
                SetProdList(res.data.products);
                setLoading(false);
                console.log("list", prodList);
            })
            .catch(error => console.log('Error Fetch  Data:', error))
    }, [Offset])


    const searchProdName = (Value) => {

        setProdName(Value)

        console.log(prodList)


    }
    const favouriteList = useSelector((state) => state.favourite.value)
    const dispatch = useDispatch()

    const handleAddFav = (element, index) => {
        const favItem = favouriteList.find(item => item === element)
        const indexFavItem = favouriteList.indexOf(favItem)
        console.log(indexFavItem)



        !favItem && dispatch(addFav(element))
        favItem && dispatch(removeFav(indexFavItem))
        console.log(favouriteList)

    }
    return (

        <>


            <div className='container  m-auto'>
            <p>Welcome to out shopping website , start browsing ...</p>


<div className='category-dropdown'>
                <InputSearch onAdd={searchProdName} />


                <DropDown />
                </div>
                <div className="row m-auto d-flex flex-row justify-content-between">
                    {prodName ?
                        <SearchedProd name={prodName} /> : (
                            isLoading ? <div className='h3'>Loading...</div>
                                : prodList?.map((element, index) =>

                                    < div className='col-lg-3 col-md-4 col-sm-6 col-6  z-0 position-relative     mt-4  '>

                                        {favouriteList.includes(element) ? <FaHeart onClick={() => handleAddFav(element, index)} color='#424290'
                                            style={{ right: "10%", top: "10px" }} className='position-absolute  z-1 translate-middle-x ' />
                                            : <FaRegHeart onClick={() => handleAddFav(element, index)} color='#424290'
                                                style={{ right: "10%", top: "10px" }} className='position-absolute  z-1 translate-middle-x ' />}
                                        <Link to={`/productDetails/${element.id}`} style={{ textDecoration: "none" }} >
                                            <div className="card w-100  m-auto position-relative position-relative " key={index} >
                                                <StockBadge Style={{ position: "absolute" }} stock={element.stock} />
                                                <img src={element.images[0]} class=" h-100 card-img-top" />

                                                <div class="card-body">

                                                    <div className='d-flex flex-row justify-content-between'>
                                                        <h5 class="card-title d-inline   fw-semibold">{element.title} </h5>
                                                        <p className="d-inline fw-semibold">{element.price}$</p>
                                                    </div>
                                                    <p class="card-text">{element.description}</p>
                                                </div>
                                                <div>
                                                    <Rating prod={element} />
                                                </div>
                                            </div>

                                        </Link>
                                        <CartButton style={{ transform: "translate(25px,-40px)" }} Amount={1} id={element?.id} prod={element} />
                                    </div>




                                ))
                    }
                </div>
                {!prodName && <Pagination onAdd={updateOffset} />}

            </div>





        </>);

}
export default Home;




