export const fetchCampaign=id=>(
  $.ajax({
    method: 'GET',
    url: `/api/campaigns/${id}`
  })
);

export const fetchAllCampaigns=()=>(
  $.ajax({
    method: 'GET',
    url: '/api/campaigns'
  })
);

export const createCampaign=camp=>(
  $.ajax({
    method: 'POST',
    url: '/api/campaigns',
    data: {camp}
  })
);

export const updateCampaign=camp=>(
  $.ajax({
    method: 'PATCH',
    url: `/api/campaigns/${camp.id}`,
    data: {camp}
  })
);

export const getCampaignBackers = (id, start=null)=>(
  $.ajax({
    method: 'GET',
    url: `/api/campaigns/${id}/backers`,
    data: {start}
  })
);

export const getCampaignUpdates = (id)=>(
  $.ajax({
    method: 'GET',
    url: `/api/campaigns/${id}/updates`
  })
);

export const createCampaignUpdate = (id,body)=>(
  $.ajax({
    method: 'POST',
    url: `/api/campaigns/${id}/updates`,
    data: {update:{body}}
  })
);

export const fetchComments = (id, start=null)=>(
  $.ajax({
    method: 'GET',
    url: `/api/campaigns/${id}/comments`,
    data: {start}
  })
);
// 
// export const cr

// window.getCampaignBackers = getCampaignBackers

// export const fetchCampaignMeta=(type,id)=>(
//   $.ajax({
//     method: 'GET',
//     url: `/api/campaigns/${id}`,
//     data:{type}
//   })
// )
