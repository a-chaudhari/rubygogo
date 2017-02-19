class Update < ActiveRecord::Base
  validates :user_id, :campaign_id, :body, presence: true

  belongs_to :campaign
  belongs_to :user

end
