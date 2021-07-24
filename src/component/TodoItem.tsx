import React, { FC } from 'react';

interface TodoItemProps {
  deleteTodo: (id: number) => void;
  id: number;
  description: React.ReactNode;
}

export const TodoItem: FC<TodoItemProps> = ({ deleteTodo, id, description }) => (
  <li className="item" onClick={() => deleteTodo(id)}>
    {description}
  </li>
);
