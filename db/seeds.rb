# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
sf=["https://s3.amazonaws.com/rubygogo-pro/seed_files/ama-dablam-2064522_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/baskets-2028298_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/grass-2031664_640.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/hot-air-balloons-1984308_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/ice-2062433_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/incense-1961430_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/loco-1897635_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/lone-tree-1934897_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/milk-splash-2064088_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/monument-2011140_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/peacock-1973546_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/plouzane-1758197_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/raspberry-2023404_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/salad-2068220_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/sculpture-2013048_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/shish-kebab-417994_640.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/strawberries-1339969_640.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/swan-2077219_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/szechenyi-chain-bridge-1758196_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/tulips-2048324_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/water-lily-1893220_1280.jpg"]

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
    cat_image_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/tech.jpg",
    tagline: "Go, gadget, go!",
    cat_icon: "fa fa-television"
  },
  {
    category: 'film',
    alt_name: "Film",
    cat_image_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/film.png",
    tagline: "Great stories start here",
    cat_icon: "fa fa-film"
  },
  {
    category: 'small_business',
    alt_name: "Small Business",
    cat_image_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/smallbiz.png",
    tagline: "Main street, inc.",
    cat_icon: "fa fa-lightbulb-o"
  },
  {
    category: 'community',
    alt_name: "Community",
    cat_image_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/comm.png",
    tagline: "For good neighbors everywhere.",
    cat_icon: "fa fa-comments-o"
  },
  {
    category: 'music',
    alt_name: "Music",
    cat_image_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/music.jpg",
    tagline: "Tune up, tune in, listen loud",
    cat_icon: "fa fa-headphones"
  },
  {
    category: 'education',
    alt_name: "Education",
    cat_image_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/education.png",
    tagline: "Education & learning for every path in life",
    cat_icon: "fa fa-book"
  },
  {
    category: 'design',
    alt_name: "Design",
    cat_image_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/design.png",
    tagline: "From die-cut to digital. Products for home & work.",
    cat_icon: "fa fa-pencil"
  },
  {
    category: 'environment',
    alt_name: "Environment",
    cat_image_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/environ.png",
    tagline: "Where earth comes first",
    cat_icon: "fa fa-envira"
  },
  {
    category: 'gaming',
    alt_name: "Gaming",
    cat_image_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/gaming.png",
    tagline: "From dice to d-pads. Game on!",
    cat_icon: "fa fa-gamepad"
  },
  {
    category: 'web',
    alt_name: "Video / Web",
    cat_image_url: "https://s3.amazonaws.com/rubygogo-pro/static_assets/web.png",
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
    address: Faker::Address.street_address,
    city: Faker::Address.city,
    postal_code: Faker::Address.postcode,
    short_desc: Faker::ChuckNorris.fact,
    avatar_img: sf.sample,
    profile_img: sf.sample,
    about_me: Faker::Hipster.paragraph(20),
    country: Faker::Address.country
  )
  users.push(user)
end


amit = User.create!(
  email: 'amitchaudhari@mac.com',
  password: 'password',
  firstName: 'Amit',
  lastName: 'Chaudhari',
  address: '4 Sapphire Dr',
  avatar_img: sf.sample,
  profile_img: sf.sample,
  city: 'Marlboro',
  postal_code: '07746',
  short_desc: 'A really cool guy',
  about_me: Faker::Hipster.paragraph(20),
  country: "United States"
)
users.push(amit)

guest = User.create!(
  email: 'guest@example.com',
  password: 'password',
  firstName: 'Guest',
  avatar_img: sf.sample,
  profile_img: sf.sample,
  lastName: 'User',
  address: Faker::Address.street_address,
  city: Faker::Address.city,
  postal_code: Faker::Address.postcode,
  short_desc: Faker::ChuckNorris.fact,
  about_me: Faker::Hipster.paragraph(20),
  country: "United States"
)
users.push(guest)

Update.destroy_all
Perk.destroy_all
camps = []
Campaign.destroy_all
Comment.destroy_all

100.times do
  # user = users.sample
  user=users.sample
  camp = Campaign.create!(
    title: Faker::Commerce.unique.product_name,
    user_id: user.id,
    goal_amount: rand(500..2000),
    tagline: Faker::Hacker.say_something_smart,
    duration: rand(7..60),
    status: 'open',
    funding_type: ['flexible','fixed'].sample,
    category_id: cats.drop(1).sample.id,
    overview_img: sf.sample,
    campaign_card_img: sf.sample,
    main_img: sf.sample,
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
