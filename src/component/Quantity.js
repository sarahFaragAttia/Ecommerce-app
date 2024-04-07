
import {useSelector,useDispatch} from "react-redux"
import { decAmount } from "../ReduxStore/cartSlice";
import { addAmount } from "../ReduxStore/cartSlice";
import {addItem } from "../ReduxStore/cartSlice";
import { useEffect, useState } from "react";
import CartButton from "./CartButton";
import axios from "axios";



const Quantity =({stock,index,onAdd})=>{

    const [Amount,SetAmount]=useState(0)
      const CartList=useSelector((state)=>state.cart.value)
      const dispatch=useDispatch()

const handleAdd=()=>{
    
    SetAmount((Amount)=> Amount+=1 );
    console.log(Amount)
    onAdd(Amount)
console.log(CartList)
}
const handleMinus=()=>{

    SetAmount((Amount)=> Amount>0 ? (Amount-=1):Amount=0)
    console.log(Amount)
    onAdd(Amount)
    // dispatch(decAmount({index:index,No:Amount}))
    console.log(CartList)

}



    return (
        <div className="row justify-content-center align-items-center">
        <div class=" col amountBtn m-4  d-flex flex-row justify-content-center border rounded-pill bg-secondary-subtle  " role="group" aria-label="Basic mixed styles example">
          <button  onClick={handleMinus} type="button" class="btn ">-</button>
          <span class=" p-2">{Amount}</span>
          
       
          <button onClick={handleAdd} type="button" class="btn ">+</button>
        </div>
        <div className="col">
        <span  >only <span className="text-danger">{stock} </span>left don't miss it </span>
        </div>
      </div>
    )
}

export default Quantity;