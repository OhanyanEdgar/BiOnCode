
// Components
import SliderItemEditDel from "./sliderItemEditDel/SliderItemEditDel"

// Styles
import "./sliderItem.css"
import PicNotFound from "../../../../assets/image-not-found.svg"

const SliderItem = ({jewelryItem, type, onItemDel, onItemEdit, onItemAdd}) => {
    return (
        <div className="slider-item">
            <div className="slider-item_pic-box">
                <img className="slider-item_pic" src={jewelryItem.pic? jewelryItem.pic: PicNotFound} alt="" />
            </div>
            <div className="slider-item_text">
                <h3>{jewelryItem.text}</h3>
            </div>
            <div className="slider-item_edit-del">
                <SliderItemEditDel jewelryItem={jewelryItem} onItemDel={onItemDel} onItemEdit={onItemEdit} />
            </div>
        </div>
    )
}

export default SliderItem;