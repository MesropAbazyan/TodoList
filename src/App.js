import './App.css';
import {useReducer} from 'react';
import TodoList, {deleteItem, changeItem} from './features/TodoList';
import TodoForm, {addItem} from './features/TodoForm';
import TodoFooter, {clearCompleted} from './features/TodoFooter';

function reducer(state, action) {
  if (action.type === 'add') {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isCompleted: false,
      },
    ];
  } else if (action.type === 'delete') {
    return state.filter((t) => t.id !== action.payload.id);
  } else if (action.type === 'change') {
    return state.map((todo) => {
      if (todo.id === action.payload.newTodo.id) {
        return action.payload.newTodo;
      }
      return todo;
    });
  } else if (action.type === 'isCompleted') {
    return state.filter((todo) => !todo.isCompleted);
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: 'JavaScript',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'React JS',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'Node JS',
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        dispatch(addItem(text));
      }} />
      <TodoList 
        todos={todos} 
        onDelete={(todo) => {
          dispatch(deleteItem(todo));
        }}
        onChange={(newTodo) => {
          dispatch(changeItem(newTodo));
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        dispatch(clearCompleted(todos));
      }} />
    </div>
  );
}

export default App;
