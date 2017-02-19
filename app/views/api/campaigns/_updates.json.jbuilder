json.array! updates do |update|
  # json.extract! update, :id, :campaign_id, :user_id, :created_at, :body
  # json.pretty_date time_ago_in_words(update.created_at) + " ago"
  # json.name update.user.full_name
  # json.avatar_img_url update.user.avatar_img_url
  json.partial! 'api/campaigns/update', update: update

end
