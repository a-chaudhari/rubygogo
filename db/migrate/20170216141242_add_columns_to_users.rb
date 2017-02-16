class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :address, :string
    add_column :users, :city, :string
    add_column :users, :postal_code, :integer
    add_column :users, :short_desc, :text
    add_column :users, :about_me, :text
    add_column :users, :profile_img_url, :string
  end
end
