import './TodoFooter.css';

export default function TodoFooter({todos, onClearCompleted}) {
  const completed = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className='TodoFooter'>
      <div>
        <span>
          <b>
            <span className='done'>{completed}</span>/
            <span className='all'>{todos.length}</span> completed
          </b>
        </span>
      </div>
      <button onClick={onClearCompleted}>Clear completed</button>
    </div>
  );
}

export function clearCompleted(clComp) {
  return {
    type: 'isCompleted',
    payload: {
      isCompleted: clComp.isCompleted,
    },
  };
}
