//  Important
import React from 'react';
import Popup from 'reactjs-popup';
import EditBox from "../edit-box/EditBox.jsx"

// Styles
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { MdDeleteSweep } from 'react-icons/md';
import "./processPopupEdit.css"


const ProcessPopupEdit = ({item, onDelItem, onEditDone}) => {

    return (
        <Popup
            trigger= {
                <span className="popup-edit">
                    {/* Only Add button item has content, and it has no need in this */}
                    {item.content? null:
                    <BiDotsHorizontalRounded
                        color={item.color} 
                        size="24"
                    />}
                </span>
            }
            position="right"
            nested
        >
            <div className="popup-edit_box"
                style={{boxShadow: `0px 10px 13px -7px ${item.color},
                                    0px 10px 15px 5px ${item.color}`}}
            >
                <button className="popup-edit_box_del-button"
                        onClick={() => onDelItem(item)} 
                        style={{borderColor: `${item.color}`}}
                >
                    <MdDeleteSweep color="red" size={23}/>
                </button>
                <div className="popup-edit_box_edit-button"
                    style={{borderColor: `${item.color}`,
                            color: `${item.color}`}}
                > 
                    <Popup nested position="bottom left"
                        trigger={<button className="button"> Edit </button>}
                    >
                        <EditBox buttonText="Done" item={item} onEditDone={onEditDone} ></EditBox>
                    </Popup>
                </div>
            </div>
        </Popup>
    )
};

export default ProcessPopupEdit;