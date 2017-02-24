json.extract! comment, :user_id, :body, :created_at, :parent_id, :id
json.name comment.user.full_name
json.avatar_img_url comment.user.avatar_img_url
json.pretty_date time_ago_in_words(comment.created_at) + " ago"
json.children comment.children do |child|
  json.extract! child, :user_id, :body, :created_at, :parent_id
  json.name child.user.full_name
  json.avatar_img_url child.user.avatar_img_url
  json.pretty_date time_ago_in_words(child.created_at) + " ago"
  json.children []
end
