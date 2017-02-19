class CreateUpdates < ActiveRecord::Migration
  def change
    create_table :updates do |t|
      t.integer :user_id, null: false
      t.integer :campaign_id, null: false
      t.text :body, null: false

      t.timestamps
    end
  end
end
