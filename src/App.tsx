import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Item from "./components/Item";
import { useEffect, useState } from "react";
import { ITodo } from "./interface/ITodo";
import {
  createToDo,
  deleteFinishTodos,
  deleteToDo,
  getToDos,
  onChangeAllTodosStatus,
  updateToDo,
} from "./service";

function App() {
  const [toDos, setToDos] = useState<Array<ITodo>>([]);
  const [trigger, settrigger] = useState(false);

  useEffect(() => {
    getToDos().then((value) => {
      setToDos(value);
    });
  }, [trigger]);

  const onCreateTodo = async (value: string) => {
    await createToDo(value);
    settrigger(!trigger);
  };

  const countFinish = () => {
    return toDos?.filter((item) => item.isComplete)?.length;
  };

  const onUpdateTodoStatus = async (item: ITodo) => {
    await updateToDo(item);
    settrigger(!trigger);
  };

  const onDeleteToDo = async (item: ITodo) => {
    await deleteToDo(item);
    settrigger(!trigger);
  };

  const onDeleteFinishedTodos = async () => {
    await deleteFinishTodos(toDos);
    settrigger(!trigger);
  };

  const onToggleAllTodosStatus = async (e: any) => {
    await onChangeAllTodosStatus(toDos, e.target.checked);
    settrigger(!trigger);
  };

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header onCreateTodo={onCreateTodo} />
        <List>
          {toDos?.map((todo) => {
            return (
              <Item
                key={todo.id}
                data={todo}
                onCompleteTodo={() => onUpdateTodoStatus(todo)}
                onDeleteToDo={() => onDeleteToDo(todo)}
              />
            );
          })}
        </List>
        <Footer
          totalCount={toDos.length}
          finishCount={countFinish()}
          onDeleteFinishedTodos={onDeleteFinishedTodos}
          onToggleAllTodosStatus={onToggleAllTodosStatus}
        />
      </div>
    </div>
  );
}

export default App;
