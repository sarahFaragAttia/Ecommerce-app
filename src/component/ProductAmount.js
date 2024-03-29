
import { useSelector, useDispatch } from "react-redux"
import { addItem } from "../ReduxStore/cartSlice";
import { useEffect, useState } from "react"
import axios from "axios";
import { addAmount} from "../ReduxStore/cartSlice"
import {decAmount} from "../ReduxStore/cartSlice"
import {removeItem} from "../ReduxStore/cartSlice"

const ProductAmount = ({ stock, index }) => {
  const [prodList, SetProdList] = useState([])
  const [Amount, SetAmount] = useState()
  const cartList = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()


  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => {
        SetProdList(res.data.products);
        console.log(res.data.products)
      })
      .catch(error => console.log('Error Fetch Data:', error))
  }, [])


  useEffect(() => {
    SetAmount(cartList.find(item => item.id === index)?.amount || 0);
  }, [cartList, index]);



  const handleAddItem = () => {

    Amount >0 && dispatch(addAmount(index))
    Amount === 0 &&dispatch(addItem({id:index,product:prodList[index],amount:1}))
 
    console.log(cartList);
  console.log(index);
  }

 const handleRemoveAmount=()=>{
  Amount >1  &&dispatch(decAmount(index))
  const deleteItem =cartList.find(item=>item.id===index)
  const ind=cartList.indexOf(deleteItem)
  Amount === 1 && dispatch(removeItem(ind))
  cartList.map(item=>item.id===index&& SetAmount(item.amount))
  console.log(cartList)
 }
  return (
    <>
      <div class=" amountBtn m-4  d-flex flex-row justify-content-center border rounded-pill bg-secondary-subtle  " role="group" aria-label="Basic mixed styles example">
        <button  onClick={handleRemoveAmount} type="button" class="btn ">-</button>
        <span class=" p-2">{Amount}</span>
        
     
        <button onClick={handleAddItem} type="button" class="btn ">+</button>
      </div>
      <span>only {stock} left don't miss it </span>
    </>





  )
}

export default ProductAmount;