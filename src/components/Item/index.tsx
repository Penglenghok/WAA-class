import { ITodo } from "../../interface/ITodo";
import "./../../App.css";
type Props = {
  data: ITodo;
  onCompleteTodo: () => void;
  onDeleteToDo: () => void;
};

export default function index({ data, onCompleteTodo, onDeleteToDo }: Props) {
  return (
    <li className="item-container">
      <label onClick={onCompleteTodo}>
        <input type="checkbox" checked={data.isComplete} />
        <span>{data.name}</span>
      </label>
      <button className="btn btn-danger btn-delete" onClick={onDeleteToDo}>
        Delete
      </button>
    </li>
  );
}
