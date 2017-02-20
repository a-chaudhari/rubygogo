class Update < ActiveRecord::Base
  validates :user_id, :campaign_id, :body, presence: true
  validates :body, length: {minimum: 1, maximum: 10000}

  belongs_to :campaign
  belongs_to :user

end
