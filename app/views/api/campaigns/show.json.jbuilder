json.merge! @campaign.attributes
json.percentDone (@campaign.current_cash/(@campaign.goal_amount*1.0)*100).round()
json.contributors (@campaign.contributions.count)
json.daysLeft distance_of_time_in_words(@campaign.created_at, @campaign.created_at+@campaign.duration.days)

json.stats do
  json.updates @campaign.updates.count
  json.comments @campaign.comments.count
  # json.backers @campaign.contributions.count
end

json.creator do
  json.partial! '/api/users/user', user: @campaign.user
end

json.perks do
  json.array! @campaign.perks.order(:price)
end
