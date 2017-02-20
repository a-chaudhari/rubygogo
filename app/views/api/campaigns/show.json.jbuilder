json.merge! @campaign.attributes
json.percentDone (@campaign.current_cash/(@campaign.goal_amount*1.0)*100).round()
json.contributors (@campaign.contributions.count)
json.daysLeft -11

json.creator do
  json.partial! '/api/users/user', user: @campaign.user
end

json.perks do
  json.array! @campaign.perks.order(:price)
end
