json.merge! @campaign.attributes
json.percentDone (@campaign.current_cash/(@campaign.goal_amount*1.0)*100).round()
json.contributors -1
json.daysLeft -1

json.creator do
  json.partial! '/api/users/user', user: @campaign.user
end

json.perks do
  json.array! @campaign.perks
end
