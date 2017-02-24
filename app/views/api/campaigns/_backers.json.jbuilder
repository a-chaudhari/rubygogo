json.array! contribs do |contrib|
  json.extract! contrib, :amount, :created_at, :id
  json.name contrib.user.full_name
  json.anonymous true
  json.avatar_img_url "https://s3.amazonaws.com/rubygogo-pro/static_assets/generic-badge.png"
  json.pretty_date time_ago_in_words(contrib.created_at) + " ago"
  json.currency currency
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
