json.array! contributions.order('created_at DESC') do |contrib|
  json.extract! contrib, :id, :campaign_id, :amount, :perk_id, :visibility
  json.date contrib.created_at
  json.campaign_title contrib.campaign.title
  json.currency contrib.campaign.currency
  json.perk_title nil
  unless contrib.perk.nil?
    json.perk_title contrib.perk.title
  end
end
