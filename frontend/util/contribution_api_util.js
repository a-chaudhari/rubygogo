export const createContribution = (contribution)=>(
  $.ajax({
    method: 'POST',
    url: '/api/contributions',
    data: {contribution}
  })
);
