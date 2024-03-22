import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import search from '../pictures/search.svg';
import SearchedProd from './SearchedProd';
import Rating from './Rating';


const Home = () => {
    const[Value,setValue]=useState()

    const [prodList, SetProdList] = useState([])

    const[title,setTitle]=useState()

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                SetProdList(res.data.products);
                console.log(res.data.products)
            })
            .catch(error => console.log('Error Fetch Data:', error))
    }, [])

 const updateValue=(e)=>{
    setValue(e.target.value);
    console.log(Value)
 }
 
 const handleSearch=()=>{
    setTitle(Value)
 }
 
 return (
        <div className='container m-auto'>
            <div class="input-group flex-nowrap m-auto w-50 mt-4 mb-4  ">

                <input type="text"  value={Value} onChange={updateValue} class="form-control  " placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" />
                <img src={search}  onClick={ handleSearch}   class=" bi bi-search input-group-text" id="addon-wrapping" />
            </div>
            <div className="row gap-3 gap-md-5  justify-content-evenly flex-row ">
            {title? 
                <SearchedProd   name={Value}/>:
                 prodList?.map((element, index) =>

                    <Link to={`/productDetails/${element.id}`}  className='col-xl-3 p-0  col-md-4 col-sm- mt-4'>   
                    <div className="card  h-100  " key={index} style={{ width: "18rem" }}>
                        <img src={element.images[0]} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{element.title}</h5>
                            <p class="card-text">{element.description}</p>
                            <p>{element.price}</p>
                        </div>
                    </div>
                    <Rating/>
                    </Link>


                )
                }
            </div>
            
        </div>);

}
export default Home;