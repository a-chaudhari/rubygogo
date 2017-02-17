import * as ContributionAPIUtils from '../util/contribution_api_util';

export const RECEIVE_CONTRIBUTION =  'RECEIVE_CONTRIBUTION';
export const RECEIVE_CONTRIBUTION_ERRORS = 'RECEIVE_CONTRIBUTION_ERRORS'

export const receiveContribution = (contribution)=>({
  type: RECEIVE_CONTRIBUTION,
  contribution
});

export const receiveContributionErorrs = (errors)=>({
  type: RECEIVE_CONTRIBUTION_ERRORS,
  errors
})

export const createContribution = contribution => dispatch=> (
  ContributionAPIUtils.createContribution(contribution).then(
    contribution=> dispatch(receiveContribution(contribution)),
    errors=> dispatch(receiveContributionErorrs(errors))
  )
);
