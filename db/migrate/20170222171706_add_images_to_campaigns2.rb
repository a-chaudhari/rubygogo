class AddImagesToCampaigns2 < ActiveRecord::Migration
  def self.up
    change_table :campaigns do |t|
      t.attachment :overview_img
      t.attachment :campaign_card_img
      t.attachment :main_img
    end
  end
end
