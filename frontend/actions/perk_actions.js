import * as PerkAPIUtils from '../util/perks_api_util';

export const RECEIVE_PERK = 'RECEIVE_PERK';
export const RECEIVE_PERKS = 'RECEIVE_PERKS';

export const receivePerk = perk => ({
  type: RECEIVE_PERK,
  perk
});

export const receivePerks = perks =>({
  type: RECEIVE_PERKS,
  perks
});

export const fetchPerks = (id) => dispatch =>(
  PerkAPIUtils.fetchPerks(id).then(perks => dispatch(receivePerks(perks)))
);

export const createPerk = perk => dispatch =>(
  PerkAPIUtils.createPerk(perk).then(perks=>dispatch(receivePerks(perks)))
);

export const deletePerk = id => dispatch => (
  PerkAPIUtils.deletePerk(id).then(perks=>dispatch(receivePerks(perks)))
);

export const updatePerk = perk => dispatch => (
  PerkAPIUtils.updatePerk(perk).then(perks=>dispatch(receivePerks(perks)))
);
