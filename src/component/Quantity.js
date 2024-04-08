
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";



const Quantity = ({ stock, onAdd }) => {

  const [Amount, SetAmount] = useState(0)
  const CartList = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()

  const handleAdd = () => {

    SetAmount((Amount) => Amount += 1);
    onAdd(Amount)
    console.log(Amount)
  }
  const handleMinus = () => {

    SetAmount((Amount) => Amount > 0 ? (Amount -= 1) : Amount = 0)
    onAdd(Amount)

  }



  return (
    <div className="row justify-content-center align-items-center">
      <div class=" col amountBtn m-4  d-flex flex-row justify-content-center border rounded-pill bg-secondary-subtle  " role="group" aria-label="Basic mixed styles example">
        <button onClick={handleMinus} type="button" class="btn ">-</button>
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