json.extract! user, :id, :firstName, :lastName, :avatar_img_url, :city, :short_desc, :about_me, :profile_img_url, :country
json.public true
json.stats do
  json.campaigns user.campaigns.count
  json.comments user.comments.count
  json.contributions user.contributions.count
end
