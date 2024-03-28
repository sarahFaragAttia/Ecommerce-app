import cart from "../pictures/cart-fill.svg"
import {useSelector} from "react-redux"

const NavBar = () => {

    const cartList=useSelector((state)=>state.cart.value)
    return (

        <nav class="navbar  bg-body-tertiary">
            <div class="container-fluid ms-4 me-4 mt-2 d-flex flex-row justify-content-between">
                <div>
                    <span class="navbar-brand mb-0 h1">ProductsApp</span>
                </div>
                <div className="navbar-brand mb-0 h1">
                    <div class=" position-relative" />
                    <img src={cart} className="m-" />
                    <span class=" cart mt-2  position-absolute   translate-middle badge rounded-pill bg-danger">
                        {cartList.length}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </div>


            </div>
        
</nav>
    )
}

export default NavBar;