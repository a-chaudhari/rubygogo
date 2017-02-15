class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.integer :goal_amount, null: false
      t.string :currency, null: false, default: 'USD'
      t.string :tagline
      t.string :campaign_card_img_url
      t.integer :duration, null: false
      t.string :funding_type, null: false
      t.string :video_url
      t.string :main_img_url
      t.string :overview_img_url
      t.integer :current_cash, null: false, default: 0
      t.string :status, null: false, default: 'draft'
      t.integer :category_id

      t.timestamps
    end
  end
end
