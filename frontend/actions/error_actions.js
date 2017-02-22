export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = (tag,errors)=>({
  type: RECEIVE_ERRORS,
  tag,
  errors
});

export const clearErrors = (tag) =>({
  type:CLEAR_ERRORS,
  tag
});
