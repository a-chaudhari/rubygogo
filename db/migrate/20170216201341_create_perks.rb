class CreatePerks < ActiveRecord::Migration
  def change
    create_table :perks do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :campaign_id, null: false
      t.integer :price, null: false
      t.integer :number_claimed, null: false, default: 0
      t.integer :total_number, null: false
      t.string :eta
      t.timestamps
    end
    add_index :perks, :campaign_id
  end
end
