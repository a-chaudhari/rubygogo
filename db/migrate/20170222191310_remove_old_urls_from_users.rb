class RemoveOldUrlsFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :profile_img_url
    remove_column :users, :avatar_img_url
  end
end
