import { IoPersonSharp } from "react-icons/io5";


const StockBadge = ({ stock, Style, ...props }) => {

    return (
        stock > 0 ? 
        <span style={Style} {...props} className="badge text-bg-success   m-2 rounded-pill">In Store </span>
      : <span  {...props} class="badge text-bg-danger">Out of Stock</span>
    )

}


export default StockBadge;