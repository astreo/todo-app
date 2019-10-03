import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as filtroAct from './filter/filter.actions';
import * as todoRdr from './todo/todo.reducer';
import * as filtroRdr from './filter/filter.reducer';




export interface AppState {
  todos: Todo[];
  filtro: filtroAct.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoRdr.todoReducer,
  filtro: filtroRdr.filtroReducer
};

