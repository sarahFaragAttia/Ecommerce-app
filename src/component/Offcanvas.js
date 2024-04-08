import { useDispatch, useSelector } from "react-redux";

import { removeFav } from "../ReduxStore/favouriteSlice"
import { FaHeart } from "react-icons/fa";
import CartButton from "./CartButton";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'

const Offcanvas = () => {


  const favourite = useSelector((state) => state.favourite.value)
  const dispatch = useDispatch()

  const handleDelete = (index) => {
    dispatch(removeFav(index))
  }
  return (
    <>


      <FaHeart color="#424290" type="button" className="ms-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
      {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <div><FaHeart color="#424290" />
            <h5 class="offcanvas-title m-3" id="offcanvasRightLabel" style={{ display: "inline-block" }}> Favourite List</h5>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

          {favourite && favourite.map((item, index) =>
            <div className="row">
              <div className="col-4">

                <img src={item?.images[0]} style={{ width: "100px", height: "100px" }} />
              </div>
              <div className="col-6">
                <h1 style={{ fontSize: "20px" }}>{item.title}</h1>
                <Link to={`/ProductDetails/${item.id}`} className="text-decoration-none text-dark">   <p className="text-wrap" style={{ fontSize: "16px" }}>More Details goes here about the product and it'as details</p></Link>
                <CartButton id={item.id} prod={item} Amount={1} style={{ width: "150px" }} />


              </div>
              <div className="col-2 position-relative">
                <MdDelete onClick={() => handleDelete(index)} color='red' className="position-absolute top-0 ms-4 me-4" />
                <p className="position-absolute bottom-0 me-4 ">{item.price}$</p>
              </div>
            </div>



          )}
        </div>
      </div>




    </>)
}

export default Offcanvas;