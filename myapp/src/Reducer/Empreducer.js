

export default function Empreducer (state = [],action){
switch(action.type) {
      case 'ADD_EMPLOYEE':
        state = state.concat(action.employees);
        return state;
      case 'DELETE_EMPLOYEE':
        state = state.filter((employee) => employee.id !== employee.id);
        return state;
        case 'FETCH_EMPLOYEE':
             
            return state;
        default:
            return state;
    }
}
