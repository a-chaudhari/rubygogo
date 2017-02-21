import { RECEIVE_PERKS } from '../actions/perk_actions';

const PerkReducer = (state=[],action) =>{
  switch(action.type){
    case RECEIVE_PERKS:
      return action.perks

    default:
      return state;
  }
}

export default PerkReducer;
