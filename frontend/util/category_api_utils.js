export const fetchCategory = (category)=>{
  return(
$.ajax({
  method: 'GET',
  url: `/api/categories/${category.category}`,
  data: {category}
}))};


export const getAllCats = ()=>(
  $.ajax({
    method: 'GET',
    url: `/api/categories`,
  })
);
