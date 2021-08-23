
// Important
import { useState, useEffect } from "react";
import Slider from "react-slick";

// Components
import SliderItem from "./slider_item/SliderItem";

// Styles
import "./jewelrySlider.css";

const JewelrySlider = ({ activeType, onItemDel, onItemEdit }) => {


    const [activeJewelryList, setActiveJewelryList] = useState(activeType.jewelryList);


    useEffect(() => {
        setActiveJewelryList(activeType.jewelryList)
    }, [activeType])



    let settings = {
        dots: false,
        infinite: true,
        scroll:true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
      };


    return (
        <div className="slider" >
            <div className="slider_row">
                <Slider {...settings} >
                    {
                    activeJewelryList.map(jewelryItem => {
                        return (
                            <div key={jewelryItem.id} >
                                <SliderItem onItemDel={onItemDel} jewelryItem={jewelryItem} onItemEdit={onItemEdit} />
                            </div>
                            )
                        }) 
                    }
                </Slider>
            </div>
        </div>
    )
}

export default JewelrySlider;