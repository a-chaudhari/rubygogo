json.array! @camps do |camp|
  json.main_img_url image_url(camp.main_img_url)
  json.extract! camp, :id, :tagline, :title
end
