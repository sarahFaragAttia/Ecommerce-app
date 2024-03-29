import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import SearchedProd from './SearchedProd';
// import Rating from './Rating';
import DropDown from './DropDown';
import NavBar from './NavBar';
import StockBadge from './StockBadge';
import InputSearch from './InputSearch';
import {useSelector,useDispatch} from "react-redux"
import { addCart } from '../ReduxStore/cartSlice';
import CartButton from './CartButton';

const Home = () => {
const dispatch=useDispatch
    const products=useSelector((state)=>state.cart.value)
    // const [Value, setValue] = useState()
    const [prodName, setProdName] = useState()


    const [prodList, SetProdList] = useState([])


    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                SetProdList(res.data.products);
                console.log(res.data.products)
            })
            .catch(error => console.log('Error Fetch Data:', error))
    }, [])

    

    const searchProdName=(Value)=>{

        setProdName(Value)
    }
    return (

        <>
            <NavBar />


            <div className='container m-auto'>
                

<InputSearch  onAdd={searchProdName}/>
                
                    {/* <div class="input-group mb-3">
                        <input type="text" class="form-control" value={Value} onChange={updateValue} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <img src={search} onClick={handleSearch} class="btn btn-outline-secondary" type="button" id="button-addon2" />
                    </div> */}

                    <DropDown />
                    <div className="row gap-3 gap-md-5  justify-content-evenly flex-row ">
                        {prodName ?
                            <SearchedProd name={prodName} /> :
                            prodList?.map((element, index) =>
                                < div className='col-xl-3 p-0  col-md-4 col-sm- mt-4'>
                                    <Link to={`/productDetails/${element.id}`} >
                                        <div className="card  h-100 position-relative position-relative " key={index} style={{ width: "18rem" }}>
                                            <StockBadge Style={{position:"absolute"}} stock={element.stock} />
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
                                    <CartButton  Amount = {1} index={index} productList={prodList}/>
                                    </div>


                                

                            )
                        }
                    </div>

                </div>
            </>);

}
            export default Home;