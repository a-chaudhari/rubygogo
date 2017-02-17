class Contribution < ActiveRecord::Base
  validates :user_id, :campaign_id, :amount, :visibility, presence: true
  validates :visibility, inclusion: { in: %w(public anonymous other)}
  validates :amount, numericality: {greater_than: 0, only_integer: true}

  belongs_to :user
  belongs_to :campaign
  belongs_to :perk


end
