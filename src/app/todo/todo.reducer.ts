import * as todoAct from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar al mundo');
const todo3 = new Todo('Prestar el traje de Ironman');

todo3.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: todoAct.Acciones): Todo[] {
  switch (action.type) {
    case todoAct.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];

    case todoAct.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      });

    case todoAct.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });

    case todoAct.EDITAR_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.texto
          };
        } else {
          return todoEdit;
        }
      });

    case todoAct.BORRAR_TODO:
      return state.filter(todoEdit => todoEdit.id !== action.id);

    case todoAct.BORRAR_ALL_TODO:
      return state.filter(todoEdit => !todoEdit.completado);

    default:
      return state;
  }
}
