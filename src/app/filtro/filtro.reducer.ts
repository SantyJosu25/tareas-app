import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer<filtrosValidos>(initialState,
  on(setFiltro,(state:filtrosValidos, {filtro})=>filtro)
);

export function filtroReducer(state: string | any, action: Action) {
  return _filtroReducer(state, action);
}
