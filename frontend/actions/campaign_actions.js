import * as CampaignAPIUtil from '../util/campaigns_api_util';

export const RECEIVE_CAMPAIGN = 'RECEIVE_CAMPAIGN';
export const RECEIVE_CAMPAIGNS = 'RECEIVE_CAMPAIGNS';
export const RECEIVE_CAMPAIGN_BACKERS = 'RECEIVE_CAMPAIGN_BACKERS';

export const receiveCampaignBackers = backers =>({
  type: RECEIVE_CAMPAIGN_BACKERS,
  backers
})

export const receiveCampaign = campaign =>({
  type: RECEIVE_CAMPAIGN,
  campaign
});

export const receiveCampaigns = campaigns =>({
  type: RECEIVE_CAMPAIGNS,
  campaigns
});

export const fetchCampaign = id=> dispatch=> (
  CampaignAPIUtil.fetchCampaign(id).then(camp=>dispatch(receiveCampaign(camp)))
);

export const fetchAllCampaigns = () => dispatch=> (
  CampaignAPIUtil.fetchAllCampaigns().then(camps=>dispatch(receiveCampaigns(camps)))
);

export const createCampaign = camp => dispatch=>(
  CampaignAPIUtil.createCampaign(camp).then(camp=>dispatch(receiveCampaign(camp)))
);

export const updateCampaign = camp => dispatch=>(
  CampaignAPIUtil.updateCampaign(camp).then(camp=>dispatch(receiveCampaign(camp)))
);

export const fetchCampaignBackers = (id, start)=>(
  CampaignAPIUtil.getCampaignBackers(id,start).then(backers => dispatch(receiveCampaignBackers(backers)))
);

// export const fetchCampaignMeta = (type,id)=> dispatch=> (
//   CampaignAPIUtil.fetchCampaignMeta(type,id)=>then(data=>dispatch(receiveCampaignMeta(data)))
// );

// window.CampaignAPIUtil = CampaignAPIUtil;
window.fetchCampaignBackers = fetchCampaignBackers;
