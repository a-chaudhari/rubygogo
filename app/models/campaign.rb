class Campaign < ActiveRecord::Base
  validates :title, :user_id, :goal_amount, :currency, :duration, :funding_type, :current_cash, :status, presence: true

  belongs_to :user
  belongs_to :category
  has_many :perks
  has_many :contributions
  has_many :updates
  has_many :comments

  has_attached_file :campaign_card_img, default_url: "/assets/generic-card.png"
  validates_attachment_content_type :campaign_card_img, content_type: /\Aimage\/.*\Z/
  has_attached_file :overview_img, default_url: "/assets/generic-overview.png"
  validates_attachment_content_type :overview_img, content_type: /\Aimage\/.*\Z/
  has_attached_file :main_img, default_url: "/assets/generic-main.png"
  validates_attachment_content_type :main_img, content_type: /\Aimage\/.*\Z/

  before_save :check_end_date

  has_many :contributors,
    through: :contributions,
    source: :user

  def add_contribution(amt)
    self.current_cash += amt
    self.save!
  end

  def curr_sym
    {
      'USD' => '$',
      'CAD' => '$',
      'GBP' => '£',
      'EUR' => '€',
      'AUD' => '$'
    }[self.currency]
  end

  def campaign_card_img_url
    campaign_card_img.url
  end

  def overview_img_url
    overview_img.url
  end

  def main_img_url
    main_img.url
  end

  def check_end_date
    if status == 'open' && end_date == nil
      self.postCampaign(false)
    end
  end

  # def status=(stat)
  #   debugger
  #   if self.status == 'draft' && stat == 'open'
  #     self.postCampaign(false)
  #   end
  #   self.status = stat
  # end

  # def category_id=(cate)
  #   # debugger
  #   self.category = Category.find_by(category: cate)
  # end

  def category=(cate)

    self.category_id  = Category.find_by(category: cate).id
  end

  def percent_funded
    (self.current_cash/(self.goal_amount*1.0)*100).round()
  end

  def postCampaign(saveIt=true)
    #sets the start_date and end_date fields
    # self.duration
    self.start_date = Time.current
    self.end_date = self.start_date + self.duration.days
    self.save! if saveIt
  end

end
