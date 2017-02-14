export const signIn = (info)=>(
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: info
  })
);

export const signOut = ()=>(
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

// export const signUp=(info)=>(
//   $.ajax({
//     method: 'POST',
//   })
// )
