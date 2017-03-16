# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
sf=["https://s3.amazonaws.com/rubygogo-pro/seed_files/ama-dablam-2064522_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/baskets-2028298_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/clock-1461689_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/glasses-1773770_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/grass-2031664_640.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/hot-air-balloons-1984308_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/ice-2062433_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/incense-1961430_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/iron-man-933709_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/lake-1781692_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/light-bulb-1640351_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/loco-1897635_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/lone-tree-1934897_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/milk-splash-2064088_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/miniature-1802333_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/monument-2011140_1280.jpg",
"https://s3.amazonaws.com/rubygogo-pro/seed_files/olive-oil-1433506_1280.jpg",
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


###

# Real campaign # 1

###

user=users.sample
camp = Campaign.create!(
  title: "ZOAR: Fat Tire, Folding Frame, Electric Bicycle",
  user_id: user.id,
  goal_amount: rand(500..2000),
  tagline: "Folding frame fat tire ebike with 85 mile range, 750w motor, 48v battery, full suspension & more.",
  duration: rand(7..60),
  status: 'open',
  funding_type: ['flexible','fixed'].sample,
  category_id: cats.drop(1).sample.id,
  overview_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_240,w_320/v1489606095/hvehjq1k9bejxjyhmyam.jpg",
  campaign_card_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_240,w_320/v1489606095/hvehjq1k9bejxjyhmyam.jpg",
  main_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1486409768/injt8adrrmn2qhazx8qi.jpg",
  overview_text: "Finally, there's an all-in-one electric bike solution that requires zero upgrades: MOAR is a complete folding frame, full-suspension electronic bicycle with 85 mile range, 750w motor, 48v lithium ion battery, water-proof electronics, projection headlights, turn signals, brake lights, aircraft grade aluminum & more. With (3) three eBike models to choose from, we've hand-selected the best setups to cater to the weekend warrior, the daily commuter and/or the eBike enthusiast.",
  pitch_text: "An all-in-one solution for the weekend warrior, the daily commuter and/or the eBike enthusiast: \nPOWER - 30% more torque, power and efficiency than the competition.\nSAFETY - Waterproof, disc brakes, headlights, turn signals & brake lights.\nDESIGN - Full suspension, folding frame, fat tires, gears & aircraft aluminum. Carefully engineered as a solution to the very cheap and very expensive eBikes that are currently on the market: BARE BONES - Most cheap eBikes are made with low quality components, requiring immediate upgrades with expensive after-market accessories. EXPENSIVE - Most expensive eBikes are loaded with pricey components that the average consumer doesn't need or won't notice in day to day life. MOAR created (3) eBike models with carefully selected premium components to fit common uses with no unneeded extras and no upgrades required."
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

###

# Real campaign # 2

###

user=users.sample
camp = Campaign.create!(
  title: "POLYGON - Camera, Signals, & Sensors for Cyclists",
  user_id: user.id,
  goal_amount: rand(500..2000),
  tagline: "Equipped with a HD camera, power bank, activity tracker, crash sensor & other smart features.",
  duration: rand(7..60),
  status: 'open',
  funding_type: ['flexible','fixed'].sample,
  category_id: cats.drop(1).sample.id,
  overview_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_240,w_320/v1489610382/nbfekq8coqf0zfpfgeie.jpg",
  campaign_card_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_361,w_361/v1489108856/dyxkxehtill4pk3zdqqt.jpg",
  main_img: 'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1489089095/s4qqssoxq3fq2cwdkhtx.jpg',
  overview_text: "With a revolutionary full HD (1080p/720p)  rear-view camera, smart sensors, and a complementary app, HEXAGON is more than just a safety device. Our streaming camera, power bank, activity tracker, odometer, and other smart features will be sure to make any bike smart, connected, and safe. Let HEXAGON change the way you ride.",
  pitch_text: "HEXAGON makes any bike a smart bike by seamlessly connecting with your smartphone. View the traffic behind you, live stream your ride, & signal to cars all through smartphone intergration. HEXAGON is equipped with a rear-facing HD camera, Automatic Stop, Turn, and Motion signals. To navigate the turn signals, HEXAGON comes with a wireless remote that securely attaches to your handle bars. HEXAGON's social and recording features can be managed through the HEXAGON app. HEXAGON comes with two 18650 batteries and can easily be recharged with the complimentary Micro-USB cable. "
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

###

# Real campaign # 3

###

user=users.sample
camp = Campaign.create!(
  title: "EPD Pocket: 8.0' UMPC-Laptop 'Ubuntu or WIN 10 OS'",
  user_id: user.id,
  goal_amount: rand(500..2000),
  tagline: "Electric Pocket Digital introduces our 7-inch PC that fits in your pocket! 8GB RAM and 128GB ROM",
  duration: rand(7..60),
  status: 'open',
  funding_type: ['flexible','fixed'].sample,
  category_id: cats.drop(1).sample.id,
  overview_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_240,w_320/v1488942825/creshhscjlz5w8h3x56p.jpg",
  campaign_card_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_361,w_361/v1487315907/pacudpslxhtca4oacttf.jpg",
  main_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1484736855/hoitngmckyszc8zfnvw5.jpg",
  overview_text: "GPD Pocket is the leader and practitioner for the next generation of laptop. Our ultimate goal is to put the laptop in the pocket.",
  pitch_text: "Most successful businessman own a Macbook or Surface.Because they have fashionable appearance and also light and thin, but the drawback is not easily moved.We believe that the future notebook will be thin,but also small. GDP Pocket is such a product, it's not only has luxuriant appearance like Macbook, but also super light and very small, It can be taken away at any time like a mobile phone in your pocket. Pocket’s exquisite and small appearance can be comparable to the MacBook Air. With the same configuration (4GB/128GB), Pocket uses active cooling design which means that the performance will be far beyond the Microsoft Surface 3 while the weight is much lighter than the latter. Through the HDMI HD cable, it can connect to any display to become a PC computer so as to exploit the performance to the maximum. The new Type C interface can be infinitely expanded with peripherals. At the same time, it is the world's first pocket laptop with 7-inch screen to support 64-bit Ubuntu 16.04 LTS. Of course we will also provide Windows 10 firmware which meets the needs of Windows users."
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

###

# Real campaign # 4

###

user=users.sample
camp = Campaign.create!(
  title: "The EverWrite Notebook",
  user_id: user.id,
  goal_amount: rand(500..2000),
  tagline: "One smart, reusable notebook to last the rest of your life? That's not magic, that's the EverWrite.",
  duration: rand(7..60),
  status: 'open',
  funding_type: ['flexible','fixed'].sample,
  category_id: cats.drop(1).sample.id,
  overview_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_240,w_320/v1487603583/edjgjaix1hw6ksw9blgd.jpg",
  campaign_card_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_361,w_361/v1484240366/jzzoq9q6brrxyccneeab.jpg",
  main_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1488485532/i4pyj8nuhp57ads6ralg.jpg",
  overview_text: "The way you take notes is about to change. Again. With the Rocketbook Everlast you can take notes, instantly blast them to cloud services you already use, then use a towel to start all over again.",
  pitch_text: "The Everlast notebook provides a classic pen and paper experience, yet is built for the digital age. Although it feels like a traditional notebook, the Everlast is endlessly reusable and connected to all of your favorite cloud services.  When you write using any pen from the Pilot FriXion line, your writing sticks to Everlast pages like regular paper. But add water… and the notebook erases like magic. The Everlast notebook is compatible with the Rocketbook app. That means before your notes go off the page they go online to destinations like Google Drive, Dropbox, Slack and Evernote — perfectly organized."
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

###

# Real campaign # 5

###

user=users.sample
camp = Campaign.create!(
  title: "Futurasha Pro",
  user_id: user.id,
  goal_amount: rand(500..2000),
  tagline: "A quirky font, magically readjusting as you write based on the preceding and following letter.",
  duration: rand(7..60),
  status: 'open',
  funding_type: ['flexible','fixed'].sample,
  category_id: cats.drop(1).sample.id,
  overview_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_240,w_320/v1489499206/wkin9r1gnrcxhe7oujqx.jpg",
  campaign_card_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_361,w_361/v1484422454/q3zvvaeldxg4cy0cedih.jpg",
  main_img: "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_620/v1484329662/bxqgmhibl8jrucagseq4.png",
  overview_text: "Futuracha Pro is an Open Type Font, which magically adjusts and readjusts as you write. Its quirkiness and eccentricity are the two main features that made it one of the most beloved fonts in the whole world. Until today, nobody was able to just sit down and type with it. Featuring various combinations of letters and plenty of playful ligatures, Futuracha Pro gives creative people the opportunity to actually type and create, making their ideas extraordinary and unique!",
  pitch_text: "Five years ago we designed Futuracha, which started as an experimental font and was published to give creative people the chance to explore and create. The response was overwhelming. Many of you loved it and used it in logos, magazines, clothes and even tattoos! Letting the numbers talk, creatives from more than 180 countries have already downloaded Futuracha more than 245,000 times. Also, Futuracha remains the most viewed and appreciated greek project on Behance and reserved a place in the top 100 project globally and top 25 in typography category. There is a tiny inconvenience though…  One does not simply type with it. Futuracha is currently available in a free .eps format which only allows graphic designers to use it by configuring and positioning every single letter. As time goes by, people keep asking for the Open Type Font files (one may actually type with), while us, we cannot help discovering its numerous potentials as a font. So, we couldn’t keep ourselves away from asking for your help to make the next step - making Futuracha Pro happen. We had to create a functional and typographically consistent font without betraying the primary, eccentric and extravagant, features of Futuracha. Also we needed to devote time into studying and designing the Open Type Font version of Futuracha while running tens of projects as a creative studio. Then prototype it, test it, find production partners, prototype the most demanding perk, do the math and spread the word, all with limited resources. The result though is quite magical and extremely rewarding."
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





100.times do
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
