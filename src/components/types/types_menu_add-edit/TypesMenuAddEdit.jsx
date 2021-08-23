
// Important
import { useState } from "react";

// Styles
import "./typesMenuAddEdit.css"
import { BsPlusCircle } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';



const TypesMenuAddEdit = ({type, role, onTypeEdit, onTypeAdd}) => {

    const [localType, setLocalType] = useState(type? {...type}: {
        name: '',
        active: false,
        id: Math.random(),
        jewelryList: []
    })

    return (
        <div className="typesMenuAdd">
            <form className="typesMenuAdd_form">
                <input className="typesMenuAdd_form_input" 
                        type="text" name="" value={localType.name} onChange={e => {
                            setLocalType(prevType => ({
                                ...prevType,
                                name: e.target.value,
                            }))
                        }} />
                <button className="typesMenuAdd_form_button"
                        onClick={(e) => {
                            e.preventDefault();
                            if (role === "Edit") {
                                onTypeEdit(localType);

                            }
                            else if (role === "Add"){
                                onTypeAdd(localType);
                            }
                        }}
                >
                    {
                    role === "Add"?
                    <BsPlusCircle size={18} color={'rgba(209, 204, 204, 0.712)'} />:
                    <IoMdSettings size={18} color={'rgba(209, 204, 204, 0.712)'} />
                    }
                </button>
            </form>
        </div>
    )
}

export default TypesMenuAddEdit;