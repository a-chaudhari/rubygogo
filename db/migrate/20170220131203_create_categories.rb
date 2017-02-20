class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :category, null: false
      t.string :tagline, null: false
      t.string :alt_name, default: :category
      t.string :cat_image_url, null: false
      t.string :cat_icon, null: false
      t.timestamps
    end
    add_index :categories, :category, unique: true
  end
end
