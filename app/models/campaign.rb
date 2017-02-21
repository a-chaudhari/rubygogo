class Campaign < ActiveRecord::Base
  validates :title, :user_id, :goal_amount, :currency, :duration, :funding_type, :current_cash, :status, presence: true

  belongs_to :user
  belongs_to :category
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

  def percent_funded
    (self.current_cash/(self.goal_amount*1.0)*100).round()
  end

  def postCampaign
    #sets the start_date and end_date fields
    # self.duration
    self.start_date = Time.current
    self.end_date = self.start_date + self.duration.days
    self.save!
  end

end
