import { useSelector, useDispatch } from "react-redux"
import { addFav, removeFav } from "../ReduxStore/favouriteSlice"
import { IoHeart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const UpdateFavList = ({ item, ...props }) => {
    const Favourite = useSelector((state) => state.favourite?.value)
    const dispatch = useDispatch()
    console.log(Favourite)
    useEffect(() => localStorage.setItem('favourite', JSON.stringify(Favourite)), [Favourite])

    const handleClick = () => {
        console.log(item.fav)

        if (item?.fav) {
            const el = Favourite.find(element => element.id === item.id)

            const index = Favourite.indexOf(el)

            dispatch(removeFav(index))
            console.log(Favourite)
        }
        !item?.fav && dispatch(addFav(item))
    }

    console.log(Favourite)
    return (
        <>
            {item?.fav ?
                <IoHeart color="#424290" className='position-absolute  z-1 translate-middle-x ' onClick={handleClick} {...props} /> : <FaRegHeart  {...props} className='position-absolute  z-1 translate-middle-x ' onClick={handleClick} {...props} />}

        </>
    )

}
export default UpdateFavList;