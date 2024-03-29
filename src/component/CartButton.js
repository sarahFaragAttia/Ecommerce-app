import {useSelector,useDispatch} from "react-redux"
import { addItem } from "../ReduxStore/cartSlice";
import { addAmount } from "../ReduxStore/cartSlice";
import {useEffect} from "react"

const CartButton=({productList,index})=>{

    const cartList=useSelector((state)=>state.cart.value)
    const dispatch=useDispatch()


    useEffect(()=>localStorage.setItem('cart',JSON.stringify(cartList)),[cartList])

    const handleAddCart=()=>{
const availableItem=cartList.find(item=>item.id===index)
availableItem && dispatch(addAmount(index))
!availableItem &&dispatch(addItem({id:index,product:productList[index],amount:1}))
    }


console.log(cartList)


    return(
        <button type="button" onClick={handleAddCart} class="btn h5 cart rounded-pill btn-outline-dark"> Add to Cart</button>

    )
}
export default CartButton;