import ReactPaginate from "react-paginate"
import { useState, useEffect } from "react"


const Pagination = (props) => {

    const [pageNumber, setPageNumber] = useState(0)

    const [endOffset, setEndOffset] = useState(0)
    const prodPage = 20

    const pageCount = Math.ceil(100 / 8)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        console.log(selected)
        setEndOffset(prodPage * selected);
    }
    useEffect(() =>
        props.onAdd(prodPage, endOffset), [endOffset])

    return (


        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={changePage}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount  ={null}
            containerClassName="paginate "
            marginPagesDisplayed={0}
            activeClassName="active"
        />

    )

}
export default Pagination;