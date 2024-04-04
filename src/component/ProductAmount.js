
import { useSelector, useDispatch } from "react-redux"
import { addItem } from "../ReduxStore/cartSlice";
import { useEffect, useState } from "react"
import axios from "axios";
import { addAmount} from "../ReduxStore/cartSlice"
import {decAmount} from "../ReduxStore/cartSlice"
import {removeItem} from "../ReduxStore/cartSlice"

const ProductAmount = ({ stock, id,prod,style,display }) => {
  
  const [Amount, SetAmount] = useState(0)
  const cartList = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()
  const [totalPrice,setTotalPrice]=useState()

  useEffect(() => {
    SetAmount(cartList.find(item => item.product?.id === id)?.amount || 0);
  },[cartList,id]);
 
  const [priceList,setPriceList]=useState([])
  const [total,setTotal]=useState()


// 


  const handleAddItem = () => {
    const availableItem=cartList.find(item=>item.product?.id===id)
    availableItem && dispatch(addAmount({id:id,No:1 }))
    !availableItem&&dispatch(addItem({product:prod,amount:1}))
 

  
  }

 const handleRemoveAmount=()=>{
  const availableItem=cartList.find(item=>item.product?.id===id)
  availableItem.amount>1  &&dispatch(decAmount({id:id,No:1 }))
  const deleteItem =cartList.find(item=>item.product?.id===id)
  const ind=cartList.indexOf(deleteItem)
 availableItem.amount ===1 && dispatch(removeItem(ind))


 }
  return (
    <>
      <div style={style} class=" amountBtn m-4    d-flex flex-row justify-content-center border rounded-pill bg-secondary-subtle  " role="group" aria-label="Basic mixed styles example">
        <button  onClick={handleRemoveAmount} type="button" class="btn ">-</button>
        <span class=" p-2">{Amount}</span>
        
     
        <button onClick={handleAddItem} type="button" class="btn ">+</button>
      </div>
      <span style={display} >only {stock} left don't miss it </span>
    </>





  )
}

export default ProductAmount;