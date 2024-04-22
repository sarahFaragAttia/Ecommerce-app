import { CiStar } from "react-icons/ci";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";

const Rating = ({ prod, ...props }) => {
  const star = [1, 2, 3, 4, 5];
  console.log(prod)
  const rate = Math.floor(prod.rating);

  return (
    <div>
      {star.map((item) => {
        if (item <= rate)
          return <FaStar {...props} color="#424290" />
        if (item > rate && item < prod.rating + 1)

          return <TiStarHalfOutline {...props} color="#424290" />

        if (item > rate)
          return <CiStar {...props} />
      })}
    </div>
  );
};
export default Rating;