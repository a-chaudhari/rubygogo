class Comment < ActiveRecord::Base
  validates :user_id, :campaign_id, :body, presence: true

  belongs_to :campaign
  belongs_to :user

  has_many :children,
    class_name: "Comment",
    primary_key: :id,
    foreign_key: :parent_id


end
