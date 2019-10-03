import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar Tarea';
export const TOGGLE_TODO = '[TODO] Toggle Tarea';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All Tarea';
export const EDITAR_TODO = '[TODO] Editar Tarea';
export const BORRAR_TODO = '[TODO] Borrar Tarea';
export const BORRAR_ALL_TODO = '[TODO] Borrar All Tarea';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public completado: boolean) {}
}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor(public id: number, public texto: string) {}
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;

  constructor(public id: number) {}
}

export class BorrarAllTodoAction implements Action {
  readonly type = BORRAR_ALL_TODO;
}

export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction | BorrarTodoAction | ToggleAllTodoAction
                     | BorrarAllTodoAction;

