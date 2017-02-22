class AddImagesToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :profile_img
      t.attachment :avatar_img
    end
  end

  def self.down
    remove_column :users, :profile_img_url
    remove_column :users, :avatar_img_url
  end
end
