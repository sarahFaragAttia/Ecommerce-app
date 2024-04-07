import {useSelector,useDispatch} from "react-redux"
import { addItem } from "../ReduxStore/cartSlice";
import { addAmount } from "../ReduxStore/cartSlice";
import {useEffect} from "react"

const CartButton=({id,style,prod,Amount,props})=>{

    const cartList=useSelector((state)=>state.cart.value)
    const dispatch=useDispatch()

    

    useEffect(()=>localStorage.setItem('cart',JSON.stringify(cartList)),[cartList])

    const handleAddCart=()=>{
const availableItem=cartList.find(item=>item.product.id===id)
availableItem && dispatch(addAmount({id:id,No:1}))
!availableItem &&dispatch(addItem({product:prod,amount:Amount}))
    }





    return(
        <button type="button" {...props} style={style} onClick={handleAddCart} class="btn h5 cart rounded-pill btn-outline-dark"> Add to Cart</button>

    )
}
export default CartButton;