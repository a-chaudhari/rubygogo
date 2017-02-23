# json.merge! camp.attributes
# json.main_img_url  image_url(camp.main_img_url)
# json.overview_img_url  image_url(camp.overview_img_url)
# json.campaign_card_img_url image_url(camp.campaign_card_img_url)
# json.curr_sym = camp.curr_sym
#
# json.percentDone (camp.current_cash/(camp.goal_amount*1.0)*100).round()
# json.contributors (camp.contributions.count)
#
# json.daysLeft distance_of_time_in_words(camp.created_at, camp.created_at+camp.duration.days)
#
# json.stats do
#   json.updates camp.updates.count
#   json.comments camp.comments.count
#   # json.backers camp.contributions.count
# end
#
#
# json.creator do
#   json.partial! '/api/users/user', user: camp.user
# end
#
# json.perks do
#   json.array! camp.perks.order(:price)
# end

json.main_img_url image_url(camp.main_img_url)
json.tagline
