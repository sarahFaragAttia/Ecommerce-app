import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const DropDown = () => {
  const [dropList, setDropList] = useState();






  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(res => {
        setDropList(() => res.data?.map((item) => { return { category: item, style: { backgroundColor: "ghostwhite", color: "black" } } }))
        console.log(dropList)
      })
      .catch(error => console.log('Fetching Error:', error))
  }, [])


  const handleStyle = (index) => {
    setDropList(() => dropList.map((item, ind) => ind === index ? { ...item, style: { backgroundColor: "#424290", color: "black" } } : { ...item, style: { backgroundColor: "ghostwhite", color: "black" } }))



  }

  return (
    <>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle p-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
        </button>
        <ul class="dropdown-menu">
          {dropList?.map((item, index) =>
            <Link to={`/cat/${item.category.slug}`} className="text-decoration-none text-black"> <li>{item.category.name}</li></Link>)}
        </ul>
      </div>
      <div >

        <ul className=" row categories m-2 p-0" >
          {dropList?.map((item, index) =>
            <Link to={`/cat/${item.category.slug}`} class=" col  d-inline p-0" key={index} > <span onClick={() => handleStyle(index)} style={item.style} class="badge  category  m-2 rounded-pill">{item.category.name}</span></Link>
          )}
        </ul>
      </div>

    </>
  )
}
export default DropDown;
