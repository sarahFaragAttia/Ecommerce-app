import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { TiStarHalfOutline } from "react-icons/ti";
import { IconContext } from "react-icons";
import { Fa500Px, FaStar } from "react-icons/fa";

    const Rating=({prod})=>{
        // const [prod, setStyle] = useState(3.6);
        const star = [1, 2, 3, 4, 5];
      console.log(prod)
        const rate = Math.floor(prod.rating);
      
        return (
          <div>
            {star.map((item) => {
              if (item <= rate) 
                return <FaStar color="#424290" />
                if ( item > rate && item <prod.rating+1)
                
                return <TiStarHalfOutline color="#424290"    />
              
               if ( item>rate)
              return <CiStar/>
            })}
          </div>
        );
      };
    export default Rating;