
// Important
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

// Components
import TypesMenu from "../types_menu/TypesMenu"

// Styles
import "./typesMenuItemAddEdit.css"




function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
  const SimpleModal = ({openn}) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(openn);
    // const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        <SimpleModal />
      </div>
    );
  
    return (
      <div>
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }



const TypesMenuItemAddEdit = ({item, role, onItemEdit, onItemAdd}) => {

    const [localItem, setLocalItem] = useState(item? {...item}: {
        text: "",
        pic: undefined,
        id: Math.random(),
    })

    // const handleFileInput = file => {
    //     try{
    //         return URL.createObjectURL(file)
    //     }catch (error) {
    //         console.log(error);
    //     }
    // }

    const [open, setOpen] = useState(false);

    const openModal = () => {
        setOpen(!open)
    }

    return (
        <div className="typesMenuItemAddEdit">
            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <TypesMenuItemAddEdit  />
                {/* <button onClick={() => {
                    openModal()
                }} >Close</button> */}
                {/* <TypesMenu /> */}
            </Modal>
            <form onSubmit={e => {
                e.preventDefault();
                role === "Edit"?
                    onItemEdit(localItem):
                    onItemAdd(localItem);

            }} className="typesMenuItemAddEdit_form">
                <input className="typesMenuItemAddEdit_edit-text"
                        type="text" value={localItem.text} onChange={e => {
                            setLocalItem(prevItem => ({
                                ...prevItem,
                                text: e.target.value,
                            }))
                        }}
                />
                <div>
                    <input className="typesMenuItemAddEdit_edit-pic"
                            type="file" onChange={e => {
                                // const reader = new FileReader();
                                // reader.addEventListener('load', () => {
                                //     setLocalItem(prevItem => ({
                                //     ...prevItem,
                                //     pic: reader.result,
                                // }))
                                // })
                                // reader.readAsDataURL(e.target.files[0])
                                console.log("open modal");
                                openModal()
                            }} />
                    <button>
                        {role === "Edit"? "Done": role}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TypesMenuItemAddEdit;


// //////////////////////////////

