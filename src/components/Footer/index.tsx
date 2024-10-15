import "./../../App.css";
type Props = {
  totalCount: number;
  finishCount: number;
  onDeleteFinishedTodos: () => void;
  onToggleAllTodosStatus: (e: any) => void;
};

export default function index({
  totalCount,
  finishCount,
  onDeleteFinishedTodos,
  onToggleAllTodosStatus,
}: Props) {
  return (
    <div className="todo-footer">
      <label onClick={onToggleAllTodosStatus}>
        <input type="checkbox" />
      </label>
      <span>
        <span>Finished {finishCount}</span> / total {totalCount}
      </span>
      <button className="btn btn-danger" onClick={onDeleteFinishedTodos}>
        Delete Finished Tasks
      </button>
    </div>
  );
}
