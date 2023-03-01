import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList({todos, onDelete, onChange}) {
  return (
    <div className='TodoList'>
      {
        todos.map((todo) => {
          return (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              onChange={onChange}
              onDelete={onDelete}
            />
          );
        })
      }
    </div>
  );
}

export function changeItem(changeIt) {
  return {
    type: 'change',
    payload: {
      newTodo: changeIt,
    }
  };
}

export function deleteItem(deleteIt) {
  return {
    type: 'delete',
    payload: {
      id: deleteIt.id,
    },
  };
}