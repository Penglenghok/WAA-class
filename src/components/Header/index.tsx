import "./../../App.css";
type Props = {
  onCreateTodo: (value: string) => void;
};

export default function index({ onCreateTodo }: Props) {
  const onNewTodo = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = event.code || event.key;
    if (keyCode == "Enter") {
      const inputElement = event.target as HTMLInputElement;
      if (!inputElement.value) {
        alert("Please enter value")
        return;
      }
      onCreateTodo(inputElement.value);
      inputElement.value = "";
    }
  };

  return (
    <div className="todo-header">
      <input
        type="text"
        placeholder="Enter task name"
        onKeyDown={(event) => onNewTodo(event)}
      />
    </div>
  );
}
