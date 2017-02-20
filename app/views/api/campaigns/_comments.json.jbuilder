json.array! comments do |comment|
  json.partial! 'api/campaigns/comment', comment: comment
end
