json.merge! camp.attributes
json.campaign_card_img_url camp.campaign_card_img.url
json.overview_img_url camp.overview_img.url
json.main_img_url camp.main_img.url
json.category camp.category.category
json.perks do
  json.array! camp.perks
end
