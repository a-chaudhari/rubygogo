json.extract! user, :id, :firstName, :lastName, :city, :short_desc, :about_me, :country
json.public true
json.profile_img_url image_url(user.profile_img_url)
json.avatar_img_url image_url(user.avatar_img_url)

json.stats do
  json.campaigns user.campaigns.count
  json.comments user.comments.count
  json.contributions user.contributions.count
end
