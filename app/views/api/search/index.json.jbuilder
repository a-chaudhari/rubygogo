json.array! @results do |res|
  json.partial! "api/categories/tile", camp: res
end
