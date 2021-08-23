
// Important 
import Popup from 'reactjs-popup';
import { useEffect } from "react";

// Components
import TypesItem from "../types_item/TypesItem";
import TypesMenuAddEdit from "../types_menu_add-edit/TypesMenuAddEdit"
import TypesMenuItemAddEdit from "../typesMenuItemAddEdit/TypesMenuItemAddEdit"

// Styles
import "./typesMenu.css";
import { BsPlusCircleFill } from 'react-icons/bs';

const TypesMenu = ({types, onTypeClick, onTypeDel, onTypeAdd, onTypeEdit, onItemAdd}) => {

    let menuLineLength = ((types.length)  * 118 + (102 + 50));

    useEffect(() => {
        menuLineLength = ((types.length)  * 118 + (116 + 50));
    }, [types])
    

    return (
        <div className="typesMenu">
            {/* <button onClick={() => console.log(types)}>Log Types</button> */}
            <div className="typesMenu_row">
                {
                    types.map(type => {
                        return <TypesItem type={type} key={type.id} 
                        onTypeDel={onTypeDel} onTypeEdit={onTypeEdit} 
                        onTypeClick={onTypeClick}/>
                    })
                }
            </div>
            <div className="typesMenu_line-add">
                <div className="typesMenu_line" style={{width: menuLineLength}}/>
                <div className="typesMenu_add" style = {{left: menuLineLength + 10}}>
                    <Popup position="top left" 
                           trigger={<span><BsPlusCircleFill color="red" size={20} /></span>}
                    >
                        <TypesMenuAddEdit role="Add" onTypeAdd={onTypeAdd} />
                    </Popup>
                </div >
                <div className="typesMenu_addItem" >
                    <Popup position="top left" 
                           trigger={<button className="typesMenu_addItem_trigger"><span>+</span> Add Item</button>}
                    >
                        <TypesMenuItemAddEdit role="Add" onItemAdd={onItemAdd} />
                    </Popup>
                    
                </div>
            </div>
        </div>
    )
}

export default TypesMenu;

