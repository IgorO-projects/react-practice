import '../node_modules/modern-normalize/modern-normalize.css';
import { Component } from 'react';
import Container from './components/Container/Container.jsx';
// import Dropdown from './components/Dropdown/Dropdown.jsx';
// import ColorPicker from './components/ColorPicker';
// import TodoList from './components/Todolist';
import intitialsTodo from './components/Todolist/initialsTodo.json';
import Form from './components/Form';


// const colorPickerOptions = [
//   { label: 'red', color: '#f44336'},
//   { label: 'green', color: '#4caf50'},
//   { label: 'blue', color: '#2196f3'},
//   { label: 'grey', color: '#607d8b'},
//   { label: 'pink', color: '#e91e63'},
//   { label: 'indigo', color: '#3f51b5'},
// ];

class App extends Component {
  state = {
    todos: intitialsTodo,
  
  };

  deleteTodo = (todoId) => {
    this.setState((prevState)=> ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }));
  };

  formSubmitHandler = data => {
    setTimeout(()=> {
      console.log(data);
    }, 1000)
  }

  render () {
    // const { todos } = this.state;

    // const completedTodos = todos.filter(todo => todo.completed).length;
    // // const completedTodos = todos.reduce((acc, todo) => {
    // //   return todo.completed ? acc + 1: acc;
    // // }, 0);

    return (
      <Container>
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <div style={{
          width: '400px',
          marginBottom: '60px',
          padding: '10px',
          border: '1px solid indigo'
          }}>
          <p>Общее кол-во: {todos.length}</p>
          <p>Кол-во выполненных: {completedTodos}</p>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </div> */}
        <Form propOnSobmit={this.formSubmitHandler}/>
      </Container>
    );
  }
}

// function App() {
//   return (
//     <Container>
//       <Dropdown />
//       <ColorPicker options={colorPickerOptions} />
//       <TodoList />
//     </Container>
//   );
// }

export default App;
