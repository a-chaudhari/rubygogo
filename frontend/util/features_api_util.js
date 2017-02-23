export const fetchTopFive = () => (
  $.ajax({
    method: "GET",
    url: '/api/topfive'
  })
);

export const fetchCategory = (category)=>{
  // debugger
  return(
$.ajax({
  method: 'GET',
  url: `/api/categories/${category.category}`,
  data: {category}
}))};
