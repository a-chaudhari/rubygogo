class AddAvatarUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :avatar_img_url, :string
  end
end
