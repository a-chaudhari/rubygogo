json.merge! @campaign.attributes
json.main_img_url  image_url(@campaign.main_img_url)
json.overview_img_url  image_url(@campaign.overview_img_url)
json.campaign_card_img_url image_url(@campaign.campaign_card_img_url)
json.curr_sym = @campaign.curr_sym

json.percentDone (@campaign.current_cash/(@campaign.goal_amount*1.0)*100).round()
json.contributors (@campaign.contributions.count)

json.daysLeft distance_of_time_in_words(@campaign.created_at, @campaign.created_at+@campaign.duration.days)

json.stats do
  json.updates @campaign.updates.count
  json.comments @campaign.comments.count
end

json.is_backer @campaign.contributors.include?(current_user)


json.creator do
  json.partial! '/api/users/user', user: @campaign.user
end

json.perks do
  json.array! @campaign.perks.order(:price)
end
