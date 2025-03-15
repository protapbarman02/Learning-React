import TodoItem from "./TodoItem";

function TodoItems({ todoItems, handleDelete }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.todoTitle}
          todoTitle={item.todoTitle}
          todoDate={item.todoDate}
          handleDelete={() => handleDelete(item)}
        />
      ))}
    </div>
  );
}

export default TodoItems;
