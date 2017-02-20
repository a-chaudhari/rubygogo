json.array! @camps do |camp|
  json.partial! 'api/categories/tile', camp: camp
end
