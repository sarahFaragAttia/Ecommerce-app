
import { useDispatch, useSelector } from "react-redux"
import ProductAmount from "../component/ProductAmount";
import xsquare from '../pictures/x-square.svg'
import { removeItem } from "../ReduxStore/cartSlice";
import { useEffect, useState } from "react";


const CartPage = () => {
    const [totalPrice, setTotalPrice] = useState()
    const dispatch = useDispatch()
    const cartList = useSelector((state) => state.cart.value).map(item => { return { ...item, price: item.amount * item.product?.price } })
    console.log(cartList)

    useEffect(() => setTotalPrice(() => cartList.reduce((total, item) => { return total + item.price }, 0)),
        [cartList.map(item => item.price)])


    const handleDeleteItem = (index) => {
        console.log(index)
        dispatch(removeItem(index))
    }
    return (
        < >
            <h2 className="m-4 fw-bold">Cart</h2>
            <table className="table  align-item-center">
                <thead >
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                        <th>Price</th>
                    </tr>
                </thead>

                {cartList?.map((item, index) =>

                    <tbody key={index} >
                        <tr>
                            <td className="w-75">
                                <img src={item.product?.images[0]} style={{ height: "100px", width: "100px" }} />
                                <p> {item.product?.description}</p>

                            </td>
                            <td className="position-relative">
                                <ProductAmount style={{ position: "absolute", top: "25%", transform: "translate(-50%)" }} display={{ display: "none" }} id={item.product?.id} />
                            </td>
                            <td className="position-relative">
                                <img onClick={() => handleDeleteItem(index)} className="ms-4 position-absolute top-50 translate-middle-y" src={xsquare} />
                            </td>
                            <td className="position-relative" >

                                <p className="position-absolute top-50 translate-middle-y">{item.price}$</p>
                            </td>


                        </tr>
                    </tbody>
                )}
            </table>
            <div className="w-100 position-relative">
                <p className="position-absolute total fw-bold ">{totalPrice} $</p>
            </div>
        </>
    )
}

export default CartPage;
