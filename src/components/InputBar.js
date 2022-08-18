import { useState } from 'react';
import './InputBar.css';

const InputBar = () => {

    const[newItem, setNewItem] = useState("");
    const[items, setItems] = useState([]);

    function addItem () {
        // console.log(newItem);
        if(!newItem) {
            alert("Enter a TUDU To-Do");
            return;
        };

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem,
        }

        setItems(oldList => [...oldList, item]);
        setNewItem("");

        // console.log(items);
    }
    
    return (
        <div className='card-body'>
            <input 
            type="text"
            placeholder="Add an item"
            className='card-text'
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            />
            <button 
            type="submit"
            className='btn'
            onClick={addItem}
            >Add</button>
            <div>
                <ul>
                    {items.map( item =>{
                        return (
                            <li key={item.id}>{item.value}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default InputBar;