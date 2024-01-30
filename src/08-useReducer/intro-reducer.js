// console.log("Olá Mundo!!!");

const initialState = [
  {
    id: 1,
    todo: "Recoletar la piedra del Alma",
    done: false,
  },
];

const newTodo = {
  id: 2,
  todo: "Recolectar la priedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

console.log({ state: todos });

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
