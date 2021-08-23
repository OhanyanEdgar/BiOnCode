
// Important 
import Popup from 'reactjs-popup';

// Components
import TypesMenuAddEdit from "../types_menu_add-edit/TypesMenuAddEdit"

// Styles
import "./typesEditDel.css"
import { MdDeleteForever } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';


const TypesEditDel = ({type, onTypeDel, onTypeEdit, onTypeAdd}) => {
    return(
        <div className="typesEditDel">
            <div className="typesEditDel_edit">
                <button className="typesEditDel_button"
                        onClick={() => onTypeDel(type)}
                >
                    <MdDeleteForever className="typesEditDel_button_icon" color="red" size={18}/>
                </button>
            </div>
            <div className="typesEditDel_del">
                <Popup position="top left"
                    trigger={<button className="typesEditDel_button">
                                <IoMdSettings className="typesEditDel_button_icon" color="white" size={15}/>
                            </button>}>
                    {/* <TypesEditPopup /> */}
                    <TypesMenuAddEdit type={type} role="Edit" 
                        onTypeEdit={onTypeEdit} onTypeAdd={onTypeAdd}
                    />
                </Popup>
            </div>
        </div>
    )
}

export default TypesEditDel;