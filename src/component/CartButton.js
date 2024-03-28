import {useSelector,useDispatch} from "react-redux"
import { addCart } from "../ReduxStore/cartSlice";

const CartButton=({productList,index})=>{

    const cartList=useSelector((state)=>state.cart.value)
    const dispatch=useDispatch()

    const handleAddCart=()=>{
dispatch(addCart({product:productList[index],amount:1}))
    }


console.log(cartList)


    return(
        <button type="button" onClick={handleAddCart} class="btn h5 cart rounded-pill btn-outline-dark"> Add to Cart</button>

    )
}
export default CartButton;