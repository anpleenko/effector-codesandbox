import { createEvent } from 'effector';

export const changeField = createEvent<string>('change field');
export const resetField = createEvent<string>('reset field');
export const addTodo = createEvent<string>();
export const deleteTodo = createEvent<number>();
