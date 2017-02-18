json.array! contribs do |contrib|
  json.extract! contrib, :amount, :created_at
  json.name contrib.user.full_name
  json.anonymous true
  json.avatar_img_url "http://placehold.it/90x90"
  json.pretty_date time_ago_in_words(contrib.created_at) + " ago"

  if contrib.visibility == 'anonymous'
    json.name 'Anonymous'
  elsif contrib.visibility == 'public'
    json.name contrib.user.full_name
    json.anonymous false
    json.user_id contrib.user_id
    json.avatar_img_url contrib.user.avatar_img_url
  elsif contrib.visibility == 'other'
    json.name contrib.other_name
  end

end
