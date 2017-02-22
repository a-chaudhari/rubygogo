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

export const createCampaign=campaign=>(
  $.ajax({
    method: 'POST',
    url: '/api/campaigns',
    data: {campaign}
  })
);

export const updateCampaign=campaign=>(
  $.ajax({
    method: 'PATCH',
    contentType: false,
    processData: false,
    url: `/api/campaigns/${campaign.id}`,
    data: {campaign}
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

export const createComment = (id, body)=>(
  $.ajax({
    method: 'POST',
    url: `/api/campaigns/${id}/comments`,
    data: {comment:{body}}
  })
);

export const fetchEditor = (id)=>(
  $.ajax({
    method: 'GET',
    url: `/api/campaigns/${id}/editor`
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
