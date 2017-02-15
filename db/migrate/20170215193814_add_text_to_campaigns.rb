class AddTextToCampaigns < ActiveRecord::Migration
  def change
    add_column :campaigns, :overview_text, :text
    add_column :campaigns, :pitch_text, :text
  end
end
