import * as filtroAct from './filter.actions';

const estadoInicial: filtroAct.filtrosValidos = 'todos';

export function filtroReducer(state = estadoInicial, action: filtroAct.acciones): filtroAct.filtrosValidos {
  switch (action.type) {
    case filtroAct.SET_FILTRO:
      return action.filtro;

    default:
      return state;
  }
 }
