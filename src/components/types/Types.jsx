
// Important
import { useState, useEffect } from "react"

// Components
import TypesMenu from "./types_menu/TypesMenu"
import JewelrySlider from "./jewelry_slider/JewelrySlider"

// Styles
import "./types.css"

// import { jewelryList1, jewelryList2, jewelryList3 } from "./jewelryLists"

const Types = ({ typesss, onTypeAdd, onTypeDel, onTypeEdit, onTypeClick, onItemAdd, onItemDel, onItemEdit }) => {
    
    // const [types, setTypes] = useState([

    //     {
    //         name: 'Type 1',
    //         active: true,
    //         id: Math.random(),
    //         jewelryList: [],
    //     },

    //     {
    //         name: 'Type 1',
    //         active: true,
    //         id: Math.random(),
    //         jewelryList: jewelryList1,
    //     },
    //     {
    //         name: 'Type 2',
    //         active: false,
    //         id: Math.random(),
    //         jewelryList: jewelryList2,
    //     },
    //     {
    //         name: 'Type 3',
    //         active: false,
    //         id: Math.random(),
    //         jewelryList: jewelryList3,
    //     },
    // ])
    

    const [activeType, setActiveType] = useState(typesss.filter(type => type.active)[0]);


    useEffect(() => {
        setActiveType(typesss.filter(type => type.active)[0])
    }, [typesss])



    // const handleOnTypeClick = activateType => {
    //     setTypes(types.map(type => type.id === activateType.id? 
    //                                 {...type, active:true}:
    //                                 {...type, active:false}));
        
    // }

    // const handleOnTypeDel = typeToDel => {

    //     let idToMakeActive = types[0].id;
    //     if(types.length > 1 && typeToDel.id === types[0].id){
    //         idToMakeActive = types[1].id;
    //     }

    //     if (types.length > 1) {
    //         setTypes(types.map(type => type.id === idToMakeActive? 
    //             {...type, active:true}:
    //             {...type, active:false}).filter(type => type.id !== typeToDel.id));
    //     }else{
    //         setTypes(types.filter(type => type.id !== typeToDel.id))
    //     }
    // }
    
    // const handleOnTypeAdd = (typeToAdd) => {
    //     if(typeToAdd.name){
    //         setTypes([...types, typeToAdd].map(type => type.id === typeToAdd.id? 
    //             {...type, active:true}:
    //             {...type, active:false}
    //         ))
    //     }
    // }

    // const handleOnTypeEdit = editedType => {
        
    //     setTypes(types.map(type => {
    //         return type.id === editedType.id ? 
    //                 {...editedType, active: true} : 
    //                     {...type, active: false};
    //     }));
    // };

    // const handleOnItemAdd = itemToAdd => {
    //     setTypes(typesss.map(type => {
    //         if(type.id === activeType.id){
    //             return {
    //                 ...type,
    //                 jewelryList: [itemToAdd, ...type.jewelryList]
    //             }
    //         }
    //         return type
    //     }))
    // }
    // const handleOnItemDel = (itemToDel, arg2 = activeType) => {

    //     setTypes(types.map(type => {
    //         if(type.id === activeType.id){
    //             return {
    //                 ...type,
    //                 // id: Math.random(),
    //                 jewelryList: type.jewelryList.filter(jewelryItem => itemToDel.id !== jewelryItem.id)

    //             }
    //         }
    //         return type
    //     }))
    // }

    // const handleOnItemEdit = (itemToEdit ) => {
    //     setTypes(types.map(type => {
    //         if(type.id === activeType.id){
    //             return {
    //                 ...type,
    //                 jewelryList: type.jewelryList.map(item => item.id === itemToEdit.id? itemToEdit: item)
    //             }
    //         }
    //         return type;
    //     }))

    // }



    return (
        <div className="types">
            <TypesMenu types={typesss} 

                onTypeAdd={onTypeAdd}
                onTypeDel={onTypeDel}
                onTypeEdit={onTypeEdit} 
                onTypeClick={onTypeClick}
                onItemAdd={onItemAdd}
                // onItemAdd={handleOnItemAdd}
                // onTypeClick={handleOnTypeClick}
                // onTypeEdit={handleOnTypeEdit} 
                // onTypeDel={handleOnTypeDel}
                // onTypeAdd={handleOnTypeAdd}

            />
            {
                activeType? 
                <JewelrySlider 
                    activeType={activeType}

                    onItemDel={onItemDel}
                    onItemEdit={onItemEdit}
                    // onItemEdit={handleOnItemEdit}
                    // onItemDel={handleOnItemDel}

                />:null
            }
            

        </div>
    )
}

export default Types;