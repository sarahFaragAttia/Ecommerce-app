

const StockBadge = ({ stock, Style }) => {

    return (
        stock > 0 ? <span style={Style} className="badge text-bg-success   m-2 rounded-pill">In Store </span>
            : <span class="badge text-bg-danger">Out of Stock</span>
    )

}


export default StockBadge;