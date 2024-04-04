import cart from "../pictures/cart-fill.svg"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {useState} from 'react'
import Offcanvas from "./pages/Offcanvas"
const NavBar = () => {
const [register,setRegister]= useState(false)
 const handleRegister=()=>{

    setRegister(true)
 }
    const cartList=useSelector((state)=>state.cart.value)
    return (

        <nav class="navbar  bg-body-tertiary">
            <div class="container-fluid ms-4 me-4 mt-2 d-flex flex-row justify-content-between">
                <div>
                <Link to ='' style={{textDecoration:"none"}}> <span class="navbar-brand mb-0 h1">ProductsApp</span></Link>
                </div>
                <div className="navbar-brand mb-0 h1">
                    <div class=" position-relative" />
                  <Link to='/login' style={{textDecoration:"none"}} >  <span className="m-1" style={{fontSize:"10px"}} >Login</span></Link>
                  <Link to='/register' style={{textDecoration:"none"}} >  <span className="m-1"   style={{fontSize:"10px"}} >Register</span></Link>
                   <Link to='/cart' style={{textDecoration:"none"}}><img src={cart} className="m-" /></Link>
                    <span class=" cart mt-2  position-absolute   badge rounded-pill bg-danger">
                        {cartList.length}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                    <Offcanvas/>
                    
                </div>


            </div>
        
</nav>
    )
}

export default NavBar;