import '../node_modules/modern-normalize/modern-normalize.css';
import { Component } from 'react';
import Container from './components/Container/Container.jsx';
// import Dropdown from './components/Dropdown/Dropdown.jsx';
// import ColorPicker from './components/ColorPicker';
// import TodoList from './components/Todolist';
import intitialsTodo from './components/Todolist/initialsTodo.json';
// import Form from './components/Form';
import Modal from './components/Modal';
import Clock from './components/Clock';
import Tabs from './components/Tabs/Tabs';
import jsontabs from './components/Tabs/tabs.json';
import IconButton from './components/IconButton';
import { ReactComponent as ClockIcon } from './components/icons/wall-clock.svg';

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
    showModal: false,
    showClock: false
  };

  deleteTodo = (todoId) => {
    this.setState((prevState)=> ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);

    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if(todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      })
    }))
  }

  formSubmitHandler = data => {
    setTimeout(()=> {
      console.log(data);
    }, 1000)
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }

  toggleClock = () => {
    this.setState(prevState => ({
      showClock: !prevState.showClock
    }))
  }

  render () {
    const { todos, showModal, showClock } = this.state;

    // const completedTodos = todos.filter(todo => todo.completed).length;
    // тоже самое 
    // const completedTodos = todos.reduce((acc, todo) => {
    //   return todo.completed ? acc + 1: acc;
    // }, 0);

    return (
      <Container>
        <button 
        type="button" 
        onClick={this.toggleModal}>Открыть модалку</button>
        {showModal && (
          <Modal
          toggleModal={this.toggleModal}>
            <button 
            type="button"
            onClick={this.toggleModal}>
              Закрыть модалку
            </button>
            <h1>Hello There</h1>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Architecto corrupti quasi tenetur ducimus! 
            Maxime incidunt veniam, tempore blanditiis qui quod similique, nostrum nulla eaque, 
            dicta ut doloremque aliquam labore ipsam impedit tempora! 
            Doloremque consectetur maxime consequatur perferendis culpa id iusto ab, 
            at itaque totam ratione qui saepe numquam. Nesciunt, beatae?
            </p>
          </Modal>
        )}
        <Tabs items={jsontabs}/>
        <IconButton
        type='button'
        onClick={this.toggleClock}
        aria-label="open clock">
          <ClockIcon width="45px" height="45px"/>
        </IconButton>
        {showClock && <Clock/>}
        
        
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
        <TodoList 
        todos={todos} 
        onDeleteTodo={this.deleteTodo}
        onToggleCompleted={this.toggleCompleted}
        />
        </div> */}
        {/* <Form propOnSobmit={this.formSubmitHandler}/> */}
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
