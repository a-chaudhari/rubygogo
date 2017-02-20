class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :campaign_id, null: false
      t.integer :parent_id
      t.text :body, null: false

      t.timestamps
    end

  end
end
