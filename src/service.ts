import { ITodo } from "./interface/ITodo";

const BASE_URL = "http://localhost:3004/todos";

export async function getToDos() {
  const data = await fetch(BASE_URL);
  return await data.json();
}

export async function updateToDo(item: ITodo) {
  const payload: ITodo = {
    ...item,
    isComplete: !item.isComplete,
  };
  await fetch(`${BASE_URL}/${item.id}`, {
    headers: {
      "content-type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(payload),
  }).catch((error) => {
    console.log("error", error);
  });
}

export async function createToDo(value: string) {
  const payload: ITodo = {
    id: generateId(),
    name: value,
    date: new Date(),
    isComplete: false,
  };
  await fetch(`${BASE_URL}`, {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  }).catch((error) => {
    console.log("error", error);
  });
}

export async function deleteToDo(item: ITodo) {
  await fetch(`${BASE_URL}/${item.id}`, {
    headers: {
      "content-type": "application/json",
    },
    method: "DELETE",
  }).catch((error) => {
    console.log("error", error);
  });
}

export async function deleteFinishTodos(todos: Array<ITodo>) {
  const finishedTodos = todos.filter((item) => item.isComplete);
  for (const todo of finishedTodos) {
    await deleteToDo(todo);
  }
}

export async function onChangeAllTodosStatus(
  todos: Array<ITodo>,
  checked: boolean
) {
  for (const todo of todos) {
    const payload: ITodo = {
      ...todo,
      isComplete: checked,
    };
    await fetch(`${BASE_URL}/${todo.id}`, {
      headers: {
        "content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(payload),
    }).catch((error) => {
      console.log("error", error);
    });
  }
}

function generateId() {
  return (Math.random() * 10).toString();
}
