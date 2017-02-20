class Campaign < ActiveRecord::Base
  validates :title, :user_id, :goal_amount, :currency, :duration, :funding_type, :current_cash, :status, presence: true

  belongs_to :user
  has_many :perks
  has_many :contributions
  has_many :updates
  has_many :comments

  has_many :contributors,
    through: :contributions,
    source: :user

  def add_contribution(amt)
    self.current_cash += amt
    self.save!
  end

end
