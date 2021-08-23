
// Components
import TypesEditDel from "../types_edit_del/TypesEditDel"

// Styles
import "./typesItem.css"

const TypesItem = ({type, onTypeClick, onTypeDel, onTypeAdd, onTypeEdit}) => {
    return(
        <div className={type.active? 'typesItem avtive-type': 'typesItem'}>
            <h3 onClick={() => onTypeClick(type)}  className="typesItem_name">{type.name}</h3>
            <TypesEditDel type={type} onTypeDel={onTypeDel} onTypeEdit={onTypeEdit} onTypeAdd={onTypeAdd} />
        </div>
    )
}

export default TypesItem;