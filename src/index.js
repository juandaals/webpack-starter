import './style.css';
import {Todo,TodoList} from './classes'; 
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();


todoList.todos.forEach(todo => crearTodoHtml(todo));


console.log(todoList.todos);

//SIRVE PARA BORRAR MIS CALLBACKS
/* setTimeout(() => {
localStorage.removeItem('mi-key');

},1500); */