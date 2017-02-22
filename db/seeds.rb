# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

cats = []

cats_to_add = [
  {
    category: 'all',
    alt_name: 'All Campaigns',
    cat_image_url: "http://lorempixel.com/210/220",
    tagline: "Fund campaigns you love.",
    cat_icon: "fa fa-film"
  },
  {
    category: 'tech',
    alt_name: "Tech",
    cat_image_url: "http://res.cloudinary.com/dhoa3rvz8/image/upload/v1487743942/tech_rg7lyg.jpg",
    tagline: "Go, gadget, go!",
    cat_icon: "fa fa-television"
  },
  {
    category: 'film',
    alt_name: "Film",
    cat_image_url: "http://res.cloudinary.com/dhoa3rvz8/image/upload/v1487743941/film_vzo1mr.png",
    tagline: "Great stories start here",
    cat_icon: "fa fa-film"
  },
  {
    category: 'small_business',
    alt_name: "Small Business",
    cat_image_url: "http://res.cloudinary.com/dhoa3rvz8/image/upload/v1487743942/smallbiz_gqkelw.png",
    tagline: "Main street, inc.",
    cat_icon: "fa fa-lightbulb-o"
  },
  {
    category: 'community',
    alt_name: "Community",
    cat_image_url: "http://res.cloudinary.com/dhoa3rvz8/image/upload/v1487743941/comm_mna9c3.png",
    tagline: "For good neighbors everywhere.",
    cat_icon: "fa fa-comments-o"
  },
  {
    category: 'music',
    alt_name: "Music",
    cat_image_url: "http://res.cloudinary.com/dhoa3rvz8/image/upload/v1487743942/music_mepwlb.jpg",
    tagline: "Tune up, tune in, listen loud",
    cat_icon: "fa fa-headphones"
  },
  {
    category: 'education',
    alt_name: "Education",
    cat_image_url: "http://res.cloudinary.com/dhoa3rvz8/image/upload/v1487743941/education_pi1dmz.png",
    tagline: "Education & learning for every path in life",
    cat_icon: "fa fa-book"
  },
  {
    category: 'design',
    alt_name: "Design",
    cat_image_url: "http://res.cloudinary.com/dhoa3rvz8/image/upload/v1487743941/design_s1ro2g.png",
    tagline: "From die-cut to digital. Products for home & work.",
    cat_icon: "fa fa-pencil"
  },
  {
    category: 'environment',
    alt_name: "Environment",
    cat_image_url: "http://res.cloudinary.com/dhoa3rvz8/image/upload/v1487743942/environ_j0sbhz.png",
    tagline: "Where earth comes first",
    cat_icon: "fa fa-envira"
  },
  {
    category: 'gaming',
    alt_name: "Gaming",
    cat_image_url: "http://res.cloudinary.com/dhoa3rvz8/image/upload/v1487743942/gaming_je7zcd.png",
    tagline: "From dice to d-pads. Game on!",
    cat_icon: "fa fa-gamepad"
  },
  {
    category: 'web',
    alt_name: "Video / Web",
    cat_image_url: "http://res.cloudinary.com/dhoa3rvz8/image/upload/v1487743942/web_zupl4h.png",
    tagline: "Phablet-sized cinema.",
    cat_icon: "fa fa-globe"
  }
]


Category.destroy_all
cats_to_add.each do |cat|
  adding_cat = Category.create!(cat)
  cats.push(adding_cat)
end

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
  email: 'amitchaudhari@mac.com',
  password: 'password',
  firstName: 'Amit',
  lastName: 'Chaudhari',
  avatar_img_url: "http://lorempixel.com/90/90",
  address: '4 Sapphire Dr',
  city: 'Marlboro',
  postal_code: '07746',
  short_desc: 'A really cool guy',
  about_me: Faker::Hipster.paragraph(20),
  profile_img_url: "http://lorempixel.com/460/285",
  country: "United States"
)
users.push(amit)

guest = User.create!(
  email: 'guest@example.com',
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
users.push(guest)

Update.destroy_all
Perk.destroy_all
camps = []
Campaign.destroy_all
Comment.destroy_all

100.times do
  user = users.sample
  camp = Campaign.create!(
    title: Faker::Commerce.unique.product_name,
    user_id: user.id,
    goal_amount: rand(500..2000),
    tagline: Faker::Hacker.say_something_smart,
    campaign_card_img_url: "http://lorempixel.com/640/640",
    duration: rand(7..60),
    status: 'open',
    funding_type: ['flexible','fixed'].sample,
    main_img_url: "http://lorempixel.com/620/415",
    overview_img_url: "http://lorempixel.com/320/240",
    category_id: cats.drop(1).sample.id,
    overview_text: Faker::Hipster.paragraph,
    pitch_text: Faker::Hipster.paragraph(30)
  )
  rand(1..6).times do
    camp.perks.create!(
      title: Faker::Commerce.unique.product_name,
      description: Faker::Hipster.paragraph,
      price: rand(1..100),
      total_number: rand(5..10),
      number_claimed: rand(0..5),
      eta: "January 1234"
    )
  end

  rand(0..3).times do
    camp.updates.create!(
      user_id: camp.user_id,
      body: Faker::Hipster.paragraph(15)
    )
  end
  comments = [];
  rand(18..28).times do
    user = users.sample
    comment = camp.comments.create!(
      user_id: user.id,
      body: Faker::Hipster.paragraph(rand(1..3))
    )
    comments.push(comment)
  end

  rand(1..3).times do
    comment = comments.sample
    comment.children.create!(
      body: Faker::Hipster.paragraph(rand(1..6)),
      user_id: comment.campaign.user_id,
      campaign_id: comment.campaign_id
    )
  end
  camp.postCampaign
  camps.push(camp)
end

Contribution.destroy_all

500.times do
  user = users.sample
  camp = camps.sample
  perk = camp.perks.sample
  visibility = %w(public anonymous other).sample
  other = ""
  if visibility == 'other'
    other = Faker::Internet.user_name
  end
  amount = perk.price + rand(1..100)
  camp.contributions.create!(
    user_id: user.id,
    perk_id: perk.id,
    amount: amount,
    visibility: visibility,
    other_name: other
  )
  camp.add_contribution(amount)
end

# Category.destroy_all
