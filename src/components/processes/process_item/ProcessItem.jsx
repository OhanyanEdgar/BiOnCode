
// Important
import Popup from 'reactjs-popup';
import SvgColor from 'react-svg-color'

// Components
import ProcessPopupEdit from "./process_popup_edit/ProcessPopupEdit.jsx"
import EditBox from "./edit-box/EditBox"

// Styles
import "./process_item.css"
import { BiPlus } from 'react-icons/bi';

const ProcessItem = ({item, onDelItem, onEditDone, onEditAdd, onDotClick}) => {

    function addAlpha(color, opacity) {
        // coerce values so ti is between 0 and 1.
        var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
        return color + _opacity.toString(16).toUpperCase();
    }

    // const setOpacity = (hex, alpha) => `${hex}${Math.floor(alpha * 255).toString(16).padStart(2, 0)}`;


    return (
        <div className="processItem">
            <div className="processItem_container">
                {item.content? null:
                    <div className="processItem_img" >
                        <SvgColor id='icon' svg={item.icon} colors={[`${item.color}`, `${item.color}`, `${item.color}`, `${item.color}`, `${item.color}`, `${item.color}`]}/>
                        {/* <img src={item.icon} alt=""/> */}
                        <div>
                        <ProcessPopupEdit onEditDone={onEditDone} onDelItem={onDelItem} item={item} />
                        </div>
                    </div>
                }
                <div className={!item.content && item.active? 'processItem_active processItem_dot': "processItem_dot"}
                     style={{backgroundColor: addAlpha(item.color, 0.55)}}
                     onClick={() => {
                        onDotClick(item);
                    }}
                >
                {/* <div className="processItem_dot" style={{backgroundColor: addAlpha(item.color, 0.55)}}> */}
                    <div className="processItem_dot_nasted">
                        
                    </div>
                </div>
                <span style={{backgroundColor: item.color}} className="processItem_dot_button">
                    
                    {/* <span style={{backgroundColor: item.color}} className={!item.content && item.active? 'processItem_active processItem_dot': "processItem_dot"} > */}

                        {item.content?
                        <Popup position="right" nested
                            trigger={<button><BiPlus className="processItem_dot_add" size={20} color="white" /></button>}
                        >
                            <EditBox className="processItem_dot_add_popup"
                                    item={item} buttonText="Add" onEditAdd={onEditAdd}/> 
                        </Popup>
                        : null}
                </span>

                <p className="processItem_text">{item.text}</p>
            </div>
        </div>
    )
}

export default ProcessItem;