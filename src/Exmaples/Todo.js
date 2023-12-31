// import UserGreeting from "./UserGreeting";
// import fullname from "./data";
import { useState } from "react";
function Practical() {
    const [message, setmessage] = useState({
        text: "",
        id: ""
    });
    const [list, setList] = useState([]);
    const [edit, setcheck] = useState({
        id: "",
        iseditable: false
    });
    /* add message */
    const handlemessage = (e) => {
        setmessage({
            ...message,
            text: e.target.value
        }
        );
    }
    /* add list */
    const handleList = () => {
        let newTodo =
        {
            message: message.text,
            id: new Date().getTime().toString()
        }
        setList([...list, newTodo])
        message.text = "";
    }
    /* detele list */
    const deleteList = (e, listid) => {
        let filterData = list.filter((each) => {
            return each.id !== listid;
        })
        setList(filterData);
    }
    /* edit */
    const handleedit = (id) => {
        setcheck({
            ...edit,
            id: id,
            iseditable: true
        });
        let editable = list.find((eachitem) => eachitem.id === id);
        console.log(editable);
        console.log(editable.message);
        setmessage({
            ...message,
            text: editable.message,

        });
    };
    const handleeditable = () => {
        console.log('previous ', list);
        let newTodo = list.map((eachitem) => {
            if (eachitem.id === edit.id) {
                return {
                    message: message.text,
                    id: edit.id,
                };
            }
            else {
                return eachitem;
            }
        }
        );
        console.log(newTodo);
        setList(newTodo);
        setmessage({
            text: "",
            id: ""
        });
        setcheck({
            id: "",
            iseditable: false
        });
    };
    return (
        <>
            <div>
                <input type="text" value={message.text} placeholder="message" onChange={(e) => handlemessage(e)} />
                {
                    edit.iseditable ? <button onClick={handleeditable}>Edit</button> : <button onClick={handleList}>Add</button>
                }
            </div>
            {
                list.length === 0 && <h3>There is no list</h3>
            }
            <ul>
                {list.map((each, index) => {
                    const { message, id } = each;
                    return <li key={index} id={id}><span>{message}</span>  <span><button onClick={(e) => deleteList(e, id)}>Delete</button > <button onClick={() => handleedit(id)}>Edit</button></span></li>
                })
                }
            </ul>
        </>

    );
}
export default Practical;