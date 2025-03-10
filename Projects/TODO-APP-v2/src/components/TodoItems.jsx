import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          todoTitle={item.todoTitle}
          todoDate={item.todoDate}
        />
      ))}
    </div>
  );
}

export default TodoItems;
