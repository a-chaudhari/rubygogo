class RemoveOldUrlsFromCampaigns < ActiveRecord::Migration
  def change
    remove_column :campaigns, :campaign_card_img_url
    remove_column :campaigns, :overview_img_url
    remove_column :campaigns, :main_img_url
  end
end
