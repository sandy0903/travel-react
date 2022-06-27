import React, {useEffect, useState} from "react";
import borabora from "../assets/borabora.jpg";
import maldives from "../assets/maldives.jpg";
import keywest from "../assets/keywest.jpg";
import maldives2 from "../assets/maldives2.jpg";
import maldives3 from "../assets/maldives3.jpg";
const Carousel = () => {
    const [images, setImages]=useState([borabora,maldives,keywest,maldives2,maldives3])
    const [value, setValue]=useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
          setValue((pre) => (pre >= images.length - 1 ? 0 : pre + 1));
        }, 3000);
        return () => clearInterval(interval);
      }, []);
    
   
  return (
    <div className="relative w-11/12 lg:w-10/12 h-96 md:h-screen mx-auto mt-36 overflow-hidden ">
         {images.map((item, key) => {
            let position = "nextSlide";
            if (key === value) {
              position = "activeSlide";
            }
            if (
              key === value - 1 ||
              (value === 0 && key === images.length - 1)
            ) {
              position = "preSlide";
            }
            return (
              <div className={`slide flex ai-center ${position}`}>
                <div className="h-full">
                  <img src={item}  />
                </div>
                
              </div>
            );
          })}
    </div>
  );
};

export default Carousel;
