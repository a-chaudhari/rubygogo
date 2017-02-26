json.array! updates do |update|
  json.partial! 'api/campaigns/update', update: update

end
