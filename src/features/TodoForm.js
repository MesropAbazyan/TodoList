import { useState } from "react";
import './TodoForm.css';

export default function TodoForm({onAdd}) {
    const [text, setText] = useState('');

    return (
        <form className="TodoForm" onSubmit={(evt) => {
            evt.preventDefault();
            onAdd(text);
            setText('');
        }}>
            <input 
                type='text' 
                placeholder="What needs to be done?"
                value={text} 
                maxLength='20'
                onChange={(evt) => setText(evt.target.value)}
            />
            <button onClick={(evt) => {}}>Add</button>
        </form>
    );
}

export function addItem(newItem) {
    return {
        type: 'add',
        payload: {
          text: newItem,
        },
    };
}