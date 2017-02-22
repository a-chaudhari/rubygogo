import * as CampaignAPIUtil from '../util/campaigns_api_util';

export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';
export const RECEIVE_CAMPAIGN_BACKERS = 'RECEIVE_CAMPAIGN_BACKERS';
export const RECEIVE_UPDATES = 'RECEIVE_UPDATES';
export const RECEIVE_UPDATE = 'RECEIVE_UPDATE';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_EDITOR = 'RECEIVE_EDITOR';

export const receiveEditor = editor => ({
  type: RECEIVE_EDITOR,
  editor
});

export const receiveComments = comments =>({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment =>({
  type: RECEIVE_COMMENT,
  comment
})

export const receiveUpdate = update =>({
  type: RECEIVE_UPDATE,
  update
});

export const receiveUpdates = updates => ({
  type: RECEIVE_UPDATES,
  updates
});

export const receiveCampaignBackers = backers =>({
  type: RECEIVE_CAMPAIGN_BACKERS,
  backers
});

export const receiveCampaign = campaign =>({
  type: RECEIVE_CAMPAIGN,
  campaign
});

export const receiveCampaigns = campaigns =>({
  type: RECEIVE_CAMPAIGNS,
  campaigns
});

export const fetchEditor = (id) => dispatch=> (
  CampaignAPIUtil.fetchEditor(id).then(res => dispatch(receiveEditor(res)))
);

export const createComment = (id,body) => dispatch=>(
  CampaignAPIUtil.createComment(id,body).then(comment => dispatch(receiveComment(comment)))
);

export const fetchComments = (id, start) => dispatch => (
  CampaignAPIUtil.fetchComments(id,start).then(comments => dispatch(receiveComments(comments)))
);

export const fetchCampaign = id=> dispatch=> (
  CampaignAPIUtil.fetchCampaign(id).then(camp=>dispatch(receiveCampaign(camp)))
);

export const fetchAllCampaigns = () => dispatch=> (
  CampaignAPIUtil.fetchAllCampaigns().then(camps=>dispatch(receiveCampaigns(camps)))
);

export const createCampaign = camp => dispatch=>(
  CampaignAPIUtil.createCampaign(camp).then(camp=>dispatch(receiveEditor(camp)))
);

export const updateCampaign = camp => dispatch=>{
  // debugger
  return(
  CampaignAPIUtil.updateCampaign(camp).then(camp=>dispatch(receiveEditor(camp)))
)};

export const fetchCampaignBackers = (id, start)=> dispatch=> (
  CampaignAPIUtil.getCampaignBackers(id,start).then(backers => dispatch(receiveCampaignBackers(backers)))
);

export const fetchCampaignUpdates = (id) => dispatch=> (
  CampaignAPIUtil.getCampaignUpdates(id).then(updates=>dispatch(receiveUpdates(updates)))
);

export const createCampaignUpdate = (id,body)=> dispatch=> (
  CampaignAPIUtil.createCampaignUpdate(id,body).then(update=>dispatch(receiveUpdate(update)))
);

window.fetchEditor = fetchEditor;

// export const fetchCampaignMeta = (type,id)=> dispatch=> (
//   CampaignAPIUtil.fetchCampaignMeta(type,id)=>then(data=>dispatch(receiveCampaignMeta(data)))
// );

// window.CampaignAPIUtil = CampaignAPIUtil;
// window.fetchCampaignBackers = fetchCampaignBackers;
