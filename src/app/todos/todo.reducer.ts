import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Tarea 1'),
  new Todo('Tarea 2'),
  new Todo('Tarea 3'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(actions.toggleAll, (state, { completado }) => state.map(todo => {
    return{
      ...todo,
      completado: completado
    }
  })),
  on(actions.limpiarTodos, state => state.filter(todo => !todo.completado)),
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
