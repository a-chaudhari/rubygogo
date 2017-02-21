class Category < ActiveRecord::Base
  validates :category, :tagline, :alt_name, :cat_image_url, :cat_icon, presence: true
  validates :category, uniqueness: true
  
  has_many :campaigns


end
