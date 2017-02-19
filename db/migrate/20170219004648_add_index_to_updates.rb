class AddIndexToUpdates < ActiveRecord::Migration
  def change
    add_index :updates, :campaign_id
  end
end
