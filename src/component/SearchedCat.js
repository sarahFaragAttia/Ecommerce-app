 const SearchedCat=({cat})=>{

const[catList,setCatList]=useState  ()


    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${cat}`)
        .then(res=>{})
    })


 }

 export default SearchedCat;