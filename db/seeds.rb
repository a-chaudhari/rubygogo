# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
amit = User.create!(
  email: 'test',
  password: 'password',
  firstName: 'Amit',
  lastName: 'Chaudhari',
  avatar_img_url: "http://lorempixel.com/90/90"
)

guest = User.create!(
  email: 'guest',
  password: 'password',
  firstName: 'Guest',
  lastName: 'User',
  avatar_img_url: "http://lorempixel.com/90/90"
)


Campaign.destroy_all
2.times do
Campaign.create!(
  title: Faker::Commerce.unique.product_name,
  user_id: amit.id,
  goal_amount: rand(500..1000000),
  tagline: Faker::Hacker.say_something_smart,
  campaign_card_img_url: "http://lorempixel.com/640/640",
  duration: rand(7..60),
  funding_type: ['flexible','fixed'].sample,
  main_img_url: "http://lorempixel.com/620/415",
  overview_img_url: "http://lorempixel.com/320/240",
  current_cash: rand(500..1000000),
  category_id: 0,
  overview_text: Faker::Hipster.paragraph,
  pitch_text: Faker::Hipster.paragraph(30)
)
end
