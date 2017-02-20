json.created do
  json.array! user.campaigns.order('created_at DESC').includes(:user) do |camp|
    json.extract! camp, :id, :title, :campaign_card_img_url, :tagline, :user_id

    json.name camp.user.full_name
  end
end

json.contributed do
  json.array! user.contributions.includes(campaign: [:user]) do |contrib|
    if contrib.visibility == 'public' || user == current_user
      json.extract! contrib.campaign, :campaign_card_img_url, :title, :tagline, :user_id
      json.name contrib.campaign.user.full_name
    end
  end
end
