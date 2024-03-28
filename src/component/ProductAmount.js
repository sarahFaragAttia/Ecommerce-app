
import { useSelector, useDispatch } from "react-redux"
import { addCart } from "../ReduxStore/cartSlice";
import { useEffect, useState } from "react"
import axios from "axios";
import { addAmount } from "../ReduxStore/cartSlice"

const ProductAmount = ({ stock, index }) => {
  const [prodList, SetProdList] = useState([])

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => {
        SetProdList(res.data.products);
        console.log(res.data.products)
      })
      .catch(error => console.log('Error Fetch Data:', error))
  }, [])

  const cartList = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()
  // const [Amount,setAmount]=useState(0)
  //  useEffect(()=> cartList.length>0  && setAmount(Amount=>cartList.map((item)=>item.product.id===index ? Amount = item.amount:Amount =0 )),[cartList])

  const AddItem = () => {
  //   cartList.length >0 ?  cartList.map((item)=>
  //   item.product.id === index?
  //   (console.log (item.product.id),
  // dispatch(addAmount(index))): 
  //  (console.log (index),dispatch(addCart({product:prodList[index],amount : 1}))))
  //  :(console.log (index),
  // dispatch(addCart({product:prodList[index],amount : 1})))}
  //     // setAmount(Amount=>)



// dispatch(addCart({product:prodList[index],amount:1}))

  dispatch(addAmount({ind:index+1 ,new:{product:prodList[index],amount:1}}))
  // cartList.length<=0 && dispatch(addCart({product:prodList[index],amount: 1}))
  
  // cartList.length>0 && cartList.filter((item) =>item.product.id === index+1 ?dispatch(addAmount(index+1)):dispatch(addCart({product:prodList[index],amount: 1})))

  console.log(cartList);
  console.log(index);
  

  }


   
  //  cartList.forEach((item, i) => console.log(item.product.id)}
  //     // item.product.id != index&&
  //     // dispatch(addCart({ product: prodList[index], amount: 1 }))
  //     )
  //    }
      
    
  //   console.log(index),

  //     console.log(cartList)}

    

  
 
  return (
    <>
      <div class=" amountBtn m-4  d-flex flex-row justify-content-center border rounded-pill bg-secondary-subtle  " role="group" aria-label="Basic mixed styles example">
        <button type="button" class="btn ">-</button>
        {cartList?.map((item)=>
        <>
        <p>, </p>
        <p>{item.amount}</p></>)
        }
        {/* <span class=" p-2">{Amount}</span> */}
        {/* {cartList.map((item, i) => item.product.id === index +1 
        && <span class=" p-2">{item.amount}</span>)} 
        {cartList.length <=0 && <span class=" p-2"> 0 </span>} */}
        <button onClick={AddItem} type="button" class="btn ">+</button>
      </div>
      <span>only {stock} left don't miss it </span>
    </>





  )
}

export default ProductAmount;