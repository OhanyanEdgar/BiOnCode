
// Important
import { useState } from 'react'

// Styles 
import "./editBox.css"

const EditBox = ({item, onEditDone, onEditAdd, buttonText}) => {

    const [newItem, setNewItem] = useState({
        ...item,
        content: ''
    });


    return(
        <div className="editBox"
            style={{boxShadow: `0px 10px 13px -7px ${item.color},
                                0px 10px 15px 5px ${item.color}`}}
        >
            <div className="editBox_text">
                <input type="text" value={newItem.text} onChange={e => {
                    setNewItem(prevItem => ({
                        ...prevItem,
                        text: e.target.value
                    }))
                }}/>
            </div>
            
            <div className="editBox_color-icon">
                <div className="editBox_color-icon_color">
                    <input type="color" value={item.color} onChange={e => {
                        setNewItem(prevItem => ({
                            ...prevItem,
                            color: e.target.value
                        }))
                    }}/>
                </div>
                
                <div className="editBox_color-icon_icon">
                    <input type="file" onChange={(e) => {
                        const reader = new FileReader();

                        reader.addEventListener('load', () => {

                          setNewItem(prevItem => ({
                              ...prevItem,
                              icon: reader.result,
                          }))
                
                        //   localStorage.setItem("resent-image", reader.result)
                        })
                
                        reader.readAsDataURL(e.target.files[0])
                    }} />
                </div>
            </div>

            <button className="editBox_done"
                onClick={() => {
                    buttonText === "Done"?
                    onEditDone(newItem):
                    onEditAdd({...newItem, id: Math.random(), types: [],});
            }}>{buttonText}</button>
        </div>
    )
}

export default EditBox;