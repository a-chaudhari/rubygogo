class Perk < ActiveRecord::Base
  validates :title, :description, :campaign_id, :price, :number_claimed, :total_number, presence: true
  validates :number_claimed, :total_number, :price, :campaign_id, numericality: true

  belongs_to :campaign

  def receive_perk
    return false if self.number_available - self.number_claimed <= 0
    self.number_claimed+=1
    self.save!
    true
  end

end
