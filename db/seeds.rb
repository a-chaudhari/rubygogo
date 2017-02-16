# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
users = [];

10.times do
  user = User.create!(
    email: Faker::Internet.unique.email,
    password: 'password',
    firstName: Faker::Name.unique.first_name,
    lastName: Faker::Name.unique.last_name,
    avatar_img_url: "http://lorempixel.com/90/90",
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    postal_code: Faker::Address.postcode,
    short_desc: Faker::ChuckNorris.fact,
    about_me: Faker::Hipster.paragraph(20),
    profile_img_url: "http://lorempixel.com/460/285",
    country: Faker::Address.country
  )
  users.push(user)
end


amit = User.create!(
  email: 'test',
  password: 'password',
  firstName: 'Amit',
  lastName: 'Chaudhari',
  avatar_img_url: "http://lorempixel.com/90/90",
  address: '123 Main St',
  city: 'Anywheresville',
  postal_code: '12345',
  short_desc: 'A really cool guy',
  about_me: Faker::Hipster.paragraph(20),
  profile_img_url: "http://lorempixel.com/460/285",
  country: "United States"
)

guest = User.create!(
  email: 'guest',
  password: 'password',
  firstName: 'Guest',
  lastName: 'User',
  avatar_img_url: "http://lorempixel.com/90/90",
  address: Faker::Address.street_address,
  city: Faker::Address.city,
  postal_code: Faker::Address.postcode,
  short_desc: Faker::ChuckNorris.fact,
  about_me: Faker::Hipster.paragraph(20),
  profile_img_url: "http://lorempixel.com/460/285",
  country: "United States"
)


Campaign.destroy_all
5.times do
  camp = Campaign.create!(
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
  rand(1..10).times do
    camp.perks.create!(
      title: Faker::Commerce.unique.product_name,
      description: Faker::Hipster.paragraph,
      price: rand(1..100),
      total_number: rand(5..10),
      number_claimed: rand(0..5),
      eta: "January 1234"
    )
  end
end
