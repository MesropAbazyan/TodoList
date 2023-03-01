function TodoItem({todo, onChange, onDelete}) {
    return (
        <div>
            <label>
                <input 
                    type='checkbox' 
                    checked={todo.completed} 
                    onChange={(evt) => {
                        onChange({
                            ...todo,
                            isCompleted: evt.target.checked,
                        });
                    }}
                />
                <span>{todo.text}</span>
                <button onClick={() => {
                    onDelete(todo);
                }}><b>x</b></button><hr/>
            </label>
        </div>
    );
}

export default TodoItem;