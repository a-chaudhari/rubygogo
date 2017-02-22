json.extract! user, :id, :email, :firstName, :lastName, :city, :short_desc, :about_me,  :country, :address, :city, :postal_code
json.public false

json.profile_img_url user.profile_img_url
json.avatar_img_url user.avatar_img_url

json.stats do
  json.campaigns user.campaigns.count
  json.comments user.comments.count
  json.contributions user.contributions.count
end
