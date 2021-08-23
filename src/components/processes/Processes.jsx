
// Important
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


//  Components
import ProcessItem from "./process_item/ProcessItem";
import Types from "../types/Types";


// Styles 
import "./processes.css";

const Processes = () => {

    if(!localStorage.getItem('Items')){
        localStorage.setItem('Items', JSON.stringify([
            {
                icon: '',
                color: "#12B252",
                text: "",
                id: Math.random(),
                active: true,
                types: [],
                content: "+",
            }
        ]))
    }

    // let [items, setItems] = useState([
    //     {
    //         icon: orangeIcon,
    //         color: "#F5961B",
    //         text: "Sketch Idea",
    //         id: Math.random(),
    //         active: true,
    //         types: [],
    //         content: ''
    //     },
    //     {
    //         icon: redIcon,
    //         color: "#F5421B",
    //         text: "Design",
    //         id: Math.random(),
    //         active: false,
    //         types: [],
    //         content: ''
    //     },
    //     {
    //         icon: blueIcon,
    //         color: "#5181DF",
    //         text: "3D File",
    //         id: Math.random(),
    //         active: false,
    //         types: [],
    //         content: ''
    //     },
    //     {
    //         icon: '',
    //         color: "#12B252",
    //         text: "",
    //         id: Math.random(),
    //         active: true,
    //         types: [],
    //         content: "+",
    //     }
    // ]);

    const handleOnDragEnd = result => {
        if(!result.destination) return
        const items = Array.from(dndItems);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        
        setDndItems(items);
    }

    const [items, setItems] = useState(localStorage.getItem('Items')? JSON.parse(localStorage.getItem('Items')): [])
    const [dndItems, setDndItems] = useState(items);
    const [activeItem, setActiveItem] = useState(items.filter(item => item.active)[0]);
    const [activeType, setActiveType] = useState(activeItem.types.filter(type => type.active)[0]);
    const [colors, setColors] = useState(items.map(item => item.color));



    useEffect(() => {
        setColors(dndItems.map(item => item.color));
        setItems(dndItems)
    }, [dndItems])

    useEffect(() =>{
        setActiveItem(items.filter(item => item.active)[0]);
        setDndItems(items)
        localStorage.setItem('Items', JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        setActiveType(activeItem.types.filter(type => type.active)[0]);
    }, [activeItem.types]);



    // Processes Handlers
    const handleOnDelItem = itemToDel => {

        let idToMakeActive = items[0].id;
        if(items.length > 1 && itemToDel.id ===items[0].id){
            idToMakeActive = items[1].id;
        }

        setItems(items.map(item => {
            if(item.id === idToMakeActive){
                return {
                    ...item,
                    active: true,
                }
            }else{
                return {
                    ...item,
                    active: false,
                }
            }
        }).filter(item => item.id !== itemToDel.id))
    }

    const handleOnEditDone = itemOnEdit => {
        setItems(items.map(item => {
            if(item.id === itemOnEdit.id){
                return {
                    ...itemOnEdit,
                    id: Math.random()
                }
            }
            return item;
        }))
    }

    const handleOnEditAdd = itemToAdd => {
        // Last item list is the plus icon for adding item
        const allItems = items.slice(0,-1)
        const addIconItem = items[items.length-1]
        setItems([...allItems, itemToAdd, addIconItem].map(item => item.id === itemToAdd.id ?
            {...item, active:true}:
            {...item, active:false}))
    }

    const handleOnDotClick = (itemOfClickedDot) => {
        console.log(itemOfClickedDot);
        setItems(items.map(item => 
            item.id === itemOfClickedDot.id?
                {...item, active:true}:
                {...item, active:false}
        ))
    }

    // Types Handlers

    const handleOnTypeAdd = (typeToAdd) => {
        if(typeToAdd.name){
            setItems(items.map(item => {
                if (item.id === activeItem.id){
                    return {
                        ...item,
                        id: Math.random(),
                        types: [...item.types, typeToAdd].map(type => type.id === typeToAdd.id? 
                                {...type, active:true}:
                                {...type, active:false}
                            )
                    }
                }
                return item
            }))
        }
    }

    const handleOnTypeDel = (typeToDel) => {

        let idToMakeActive = activeItem.types[0].id;
        if(activeItem.types.length > 1 && typeToDel.id === activeItem.types[0].id){
            idToMakeActive = activeItem.types[1].id;
        }

        if (activeItem.types.length > 1) {

            setItems(items.map(item => {
                if(!item.content){
                    return {
                        ...item,
                        types: item.types.map(type => type.id === idToMakeActive? 
                            {...type, active:true}:
                            {...type, active:false}).filter(type => type.id !== typeToDel.id)
                    } 
                }else{
                    return item
                }
            }))
        }else{
            setItems(items.map(item => {
                if(item.id === activeItem.id) {
                    return {
                        ...item,
                        types: item.types.filter(type => type.id !== typeToDel.id)
                    }
                }else{
                    return item
                }
            }))
        }
    }

    const handleOnTypeEdit = editedType => {
        
        setItems(items.map(item => {
            if (!item.content){
                return {
                    ...item,
                    types: item.types.map(type => {
                        return type.id === editedType.id ? 
                                {...editedType, active: true} : 
                                    {...type, active: false};
                    })
                }
            }else{
                return item;
            }
        }))
    };

    const handleOnTypeClick = activateType => {

        setItems(items.map(item => {
            if (!item.content){
                return {
                    ...item,
                    types: item.types.map(type => type.id === activateType.id?
                                                 {...type, active:true}:
                                                 {...type, active:false})
                }
            }else{
                return item;
            }
        }))        
    }

    const handleOnItemAdd = itemToAdd => {

        setItems(items.map(item => {
            if (!item.content){
                return {
                    ...item,
                    types: item.types.map(type => {
                        console.log('activeType: ', activeType);
                        if(type.id === activeType.id){
                            return{
                                ...type,
                                jewelryList: [itemToAdd, ...type.jewelryList]
                            }
                        }else{
                            return type
                        }
                    })
                }
            }else{
                return item;
            }
        }))
    }

    const handleOnItemDel = (itemToDel, arg2 = activeType) => {

        setItems(items.map(item => {
            if(!item.content){
                return {
                    ...item,
                    types: item.types.map(type => {
                            if(type.id === activeType.id){
                                return {
                                    ...type,
                                    // id: Math.random(),
                                    jewelryList: type.jewelryList.filter(jewelryItem => itemToDel.id !== jewelryItem.id)
                
                                }
                            }
                            return type
                        })
                }
            }else{
                return item;
            }
        }))
    }

    const handleOnItemEdit = (itemToEdit ) => {

        setItems(items.map(item => {
            if(!item.content){
                return {
                    ...item,
                    types: item.types.map(type => {
                            if(type.id === activeType.id){
                                return {
                                    ...type,
                                    jewelryList: type.jewelryList.map(item => item.id === itemToEdit.id? itemToEdit: item)
                                }
                            }
                            return type;
                        })
                }
            }else{
                return item;
            }
        }))

    }




    return(
        <div className="processes">
            {/* <button onClick={() => console.log(items)}>Log Processes</button> */}
            
            <div className="processes_container">
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters" direction="horizontal">
                        {(provided) => (
                            <div className="processes_items" {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                dndItems.map((item, index) => {
                                    return (
                                        <Draggable key={item.id + ""} draggableId={item.id + ''} index={index}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                    <ProcessItem 
                                                className="processes_item"
                                                onEditDone={handleOnEditDone} onEditAdd={handleOnEditAdd}
                                                onDelItem={handleOnDelItem} onDotClick={handleOnDotClick}
                                                item={item}/>
                                                </div>
                                            )}
                                        </ Draggable>
                                    )
                                })
                            }
                            {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </ DragDropContext>
                    <div 
                        className="processes_gradient-line"
                        style={{width: (items.length - 1)  * 110,
                        backgroundImage: `linear-gradient(to right, ${[...colors]})`}} 
                    />
            </div>
            
            
            {/* <div className="processes_container">
                <div className="processes_items">
                {
                    items.map(item => <ProcessItem className="processes_item"
                    onEditDone={handleOnEditDone} onEditAdd={handleOnEditAdd}
                    onDelItem={handleOnDelItem} onDotClick={handleOnDotClick} key={item.id} item={item}/>)
                }
                </div>
                <div 
                    className="processes_gradient-line"
                    style={{width: (items.length - 1)  * 110,
                    backgroundImage: `linear-gradient(to right, ${[...colors]})`}} 
                />
            </div> */}
            <Types typesss={activeItem.types}
                   onTypeAdd={handleOnTypeAdd}
                   onTypeDel={handleOnTypeDel}
                   onTypeEdit={handleOnTypeEdit}
                   onTypeClick={handleOnTypeClick}
                   onItemAdd={handleOnItemAdd}

                   onItemDel={handleOnItemDel}
                   onItemEdit={handleOnItemEdit}
            />

        </div>
    )
}

export default Processes;

