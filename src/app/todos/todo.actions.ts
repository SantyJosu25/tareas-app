import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[Tarea] Crear Tarea',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[Tarea] Toggle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[Tarea] Editar Todo',
  props<{ id: number, texto: string }>()
);

export const borrar = createAction(
  '[Tarea] Borrar Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[Tarea] ToggleAll Todo',
  props<{ completado: boolean }>()
);

export const limpiarTodos = createAction(
  '[Tarea] Limpiar Tarea'
);
