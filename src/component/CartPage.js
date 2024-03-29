
import { useSelector } from "react-redux"
import ProductAmount from "./ProductAmount";
import NavBar from "./NavBar";
import xsquare from '../pictures/x-square.svg'


const CartPage = () => {
    const cartList = useSelector((state) => state.cart.value)
    console.log(cartList)
    return (
    <>
            <NavBar />
            <h2>Cart</h2>
            <table className="table m-4 align-item-center">
                <thead >
                <tr>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                    <th>Price</th>
                    </tr>
                </thead>

                {cartList?.map((item) =>

                    <tbody >
                    <tr>
                        <td >
                            <img src={item.product?.images[0]} style={{ height: "100px", width: "100px" }} />
                            <p> {item.product?.description}</p>

                        </td>
                        <td >
                            <ProductAmount  display ={{style:"display-none"}} index={item.id} />
                        </td>
                        <td >
                            <img src={xsquare}/>
                        </td>
                        <td >
                            
                            <p>{item.amount * item.product.price}</p>
                        </td>


</tr>
                    </tbody>
                )}
            </table>
            <div>
                <p>total</p>
                </div>
            </>
            )
  }

            export default CartPage;
            