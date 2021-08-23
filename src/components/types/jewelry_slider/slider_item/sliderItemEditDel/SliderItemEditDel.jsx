// Important 
import Popup from 'reactjs-popup';

// Components
import TypesMenuItemAddEdit from "../../../typesMenuItemAddEdit/TypesMenuItemAddEdit"

// Styles
import "./sliderItemEditDel.css";
import { MdDeleteForever } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';


const SliderItemEditDel = ({jewelryItem , onItemDel, onItemEdit}) => {
    return(
        <div className="sliderItemEditDel">
            <div className="sliderItemEditDel_del">
                <button className="sliderItemEditDel_button"
                        onClick={e => onItemDel(jewelryItem)}
                >
                    <MdDeleteForever className="sliderItemEditDel_button_icon" color="red" size={18}/>
                </button>
            </div>
            <div className="sliderItemEditDel_edit">
                <Popup position="top"
                    trigger={<button className="sliderItemEditDel_button">
                                <IoMdSettings className="sliderItemEditDel_button_icon" color="#5A5A5A" size={15}/>
                            </button>}>
                    <TypesMenuItemAddEdit item={jewelryItem} role="Edit" onItemEdit={onItemEdit}/>
                </Popup>
            </div>
        </div>
    )
}

export default SliderItemEditDel;