import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import SearchedProd from './SearchedProduct';
import DropDown from '../component/DropDown';
import StockBadge from '../component/StockBadge';
import InputSearch from '../component/InputSearch';
import { useSelector, useDispatch } from "react-redux"
import CartButton from '../component/CartButton';
import Pagination from '../component/Pagination';
import Rating from '../component/Rating';
import UpdateFavList from '../component/UpdateFavList';

const Home = () => {

    const products = useSelector((state) => state.cart.value)
    const [prodName, setProdName] = useState()
    const [Offset, setOffset] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [prodList, SetProdList] = useState([])

    const updateOffset = (prodPage, endOffset) => {
        setOffset({ limit: prodPage, skip: endOffset })
    }
    const Favourite = useSelector((state) => state.favourite?.value)
    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=${Offset.limit}&skip=${Offset.skip}`)
            .then(res => {
                // console.log(res);
                SetProdList(() =>
                    res.data.products.map(item =>
                        Favourite?.some(element => element.id === item.id)
                            ? { ...item, fav: true }
                            : { ...item, fav: false }
                    )
                );
                setLoading(false);
                console.log("list", prodList);
            })
            .catch(error => console.log('Error Fetch  Data:', error))
    }, [Offset, Favourite])


    const searchProdName = (Value) => {

        setProdName(Value)

        console.log(prodList)


    }

    return (

        <>

            <div className='container-fluid  m-auto'>
                <p className='mt-4'>Welcome to out shopping website , start browsing ...</p>


                <div className='category-dropdown'>
                    <InputSearch onAdd={searchProdName} />


                    <DropDown />
                </div>
                <div className="row prodCard  " >
                    {prodName ?
                        <SearchedProd name={prodName} /> : (
                            isLoading ? <div className='h3'>Loading...</div>
                                : prodList?.map((element, index) =>

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

                                ))
                    }
                </div>
                {!prodName && <Pagination onAdd={updateOffset} />}

            </div>

        </>);

}
export default Home;




