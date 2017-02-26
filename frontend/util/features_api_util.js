export const fetchTopFive = () => (
  $.ajax({
    method: "GET",
    url: '/api/topfive'
  })
);

export const fetchCategory = (category)=>{
  return(
$.ajax({
  method: 'GET',
  url: `/api/categories/${category.category}`,
  data: {category}
}))};
