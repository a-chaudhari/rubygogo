export const createUser=(user)=>(
  $.ajax({
    method: 'post',
    url: '/api/users/',
    date: {user}
  })
);
