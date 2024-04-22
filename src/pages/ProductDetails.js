import { useLocation, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import StockBadge from "../component/StockBadge";
import ProductAmount from "../component/ProductAmount";
import Quantity from "../component/Quantity";
import CartButton from "../component/CartButton";
import { Link } from "react-router-dom"
import Rating from "../component/Rating";
import { useSelector } from "react-redux";
import UpdateFavList from "../component/UpdateFavList";

const ProductDetails = () => {
    const params = useParams()
    const [prodDetails, setProdDetails] = useState()

    const [loading, setLoading] = useState(true)

    const [amount, setAmount] = useState()

    const handleAmount = (Amount) => {
        setAmount(Amount + 1)
        console.log(amount)
    }
    const Favourite = useSelector((state) => state.favourite?.value)


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.index} `)
            .then(res => {
                setProdDetails(() => {
                    if (Favourite.some(item => item.id === res.data.id)) { return { ...res.data, fav: true } }
                    else { return { ...res.data, fav: false } }
                });
                setLoading(false);

                console.log(prodDetails)
            })
            .catch(error => console.log('Fetching Error:', error))
    }, [params, Favourite]);

    return (
        <>
            {loading && <div className="h3">Loading....</div>}

            <div className="container-fluid position-relative ">
                {prodDetails ? <>
                    <div className='row gap-2 ms-2 me-2  mt-4 position-relative z-0 '>

                        <div className="col  ">
                            <UpdateFavList size="30px" style={{ right: "-20px" }} item={prodDetails} />

                            <div style={{ height: "100%" }}>
                                <img src={prodDetails?.images[0]} className=" h-100 img-fluid" />
                            </div>
                            <div className="m-2 row">
                            </div>


                        </div>
                        <div className="col " style={{ height: "100%" }}>
                            <div>
                                <h2 className="mb-4 fs-2 fw-bold">{prodDetails?.title}</h2>
                                <Rating className="mb-2" prod={prodDetails} />

                            </div>
                            <article className="fs-5">{prodDetails?.description}</article>
                            <hr />
                            <span className="fw-semibold fs-5">{prodDetails?.price}$</span>
                            <p className="fs-5 mt-2">Suggest payment with 6 months special financing</p>
                            <hr />
                            <StockBadge style={{ position: 'relative', width: "100px", padding: "10px" }} stock={prodDetails?.stock} />
                            <hr />
                            <ProductAmount prod={prodDetails} id={prodDetails?.id} stock={prodDetails?.stock} />
                            {/* <Quantity  onAdd={handleAmount} index={
                                prodDetails?.id} stock={prodDetails?.stock}/> */}
                            <hr className="m-2 gap-1" />
                            <div className=" mt-4 fs-5 ">
                                <Link to="/cart" style={{ textDecoration: "none" }}>
                                    <button type="button" style={{ width: "40%", transform: 'translatex(0) translatey(0)', fontSize: "14px", fontWeight: "500" }} class="btn buy me-4  cart rounded-pill btn-outline-dark"> Buy Now</button></Link>
                                <CartButton className="btn cart" style={{ width: "40%", fontSize: "14px", fontWeight: "500", }} Amount={amount} id={prodDetails?.id} prod={prodDetails} />
                            </div>

                        </div></div>
                    {(prodDetails?.images) && (prodDetails.images).map((item) => {
                        return (


                            <img src={item} className="  col-2 img-fluid ms-3 mb-4 " style={{ height: "130px", width: "130px", marginTop: "50px" }} />
                        )
                    })}


                </>


                    : <div> Product NoT FOUNT </div>}

            </div>

        </>

    )
}
export default ProductDetails;