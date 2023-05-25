"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};
export const TodoItem = ({
  complete,
  id,
  title,
  toggleTodo,
}: TodoItemProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => {
          toggleTodo(id, e.target.checked);
        }}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer"
      >
        {title}
      </label>
    </li>
  );
};
