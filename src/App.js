import './App.css';

import TodoForm from './TodoForm';

function App() {
  return (
    <div className="App">
      <TodoForm 
        addTodo={(newTodo) => {
          console.table(newTodo)
        }}
      />
    </div>
  );
}

export default App;
