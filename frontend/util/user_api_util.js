export const createUser=(user)=>(
  $.ajax({
    method: 'post',
    url: '/api/users/',
    data: {user}
  })
);

export const fetchUser= id=>(
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
  })
);

export const updateUser=user=>{
  debugger
  return(
  $.ajax({
    method: 'PATCH',
    contentType: false,
    processData: false,
    url: `/api/users/${user.id}`,
    data: user
  })
)};

export const fetchContributions = id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}/contributions`
  })
);

export const fetchCampaigns = id => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}/campaigns`
  })
);
