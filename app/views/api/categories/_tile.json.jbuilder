json.extract! camp, :title, :tagline, :current_cash, :goal_amount, :category_id, :currency, :campaign_card_img_url, :id
json.end_date camp.end_date.strftime('%Y-%m-%d %H:%M:%S.%N').chomp('000')
json.daysLeft distance_of_time_in_words(camp.created_at, camp.created_at+camp.duration.days)

json.percentDone [camp.percent_funded,100].min
json.percentDoneReal camp.percent_funded

json.extract! camp.category, :alt_name
