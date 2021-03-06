import './Todolist.css';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {

    return (
    <ul className="todolist">
        {todos.map(({id, text, completed}) => {

        return (
        <li key={id} className="todolist__item">
            <input 
            type="checkbox"
            checked={completed}
            onChange={()=> onToggleCompleted(id)}
            />
            <p className="todolist__text">{text}</p>
            <button onClick={()=> onDeleteTodo(id)}>Удалить</button>
            </li>)
    })}</ul>
    );
};

export default TodoList;