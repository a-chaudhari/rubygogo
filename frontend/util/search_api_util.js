export const sendSearch = (query,offset)=>(
  $.ajax({
    method: 'GET',
    url: `/api/search/${query}`,
    data: {offset}
  })
);
