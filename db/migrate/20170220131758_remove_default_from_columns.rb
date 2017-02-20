class RemoveDefaultFromColumns < ActiveRecord::Migration
  def change
    change_column :categories, :alt_name, :string, default: nil, null: false
  end
end
