json.extract! user, :id, :email, :firstName, :lastName, :avatar_img_url, :city, :short_desc, :about_me, :profile_img_url, :country, :address, :city, :postal_code
json.public false

json.stats do
  json.campaigns user.campaigns.count
  json.comments -11
  json.contributions user.contributions.count
end
