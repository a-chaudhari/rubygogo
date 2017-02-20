class RemoveDefaultFromColumns2 < ActiveRecord::Migration
  def change
    change_column_default :categories, :alt_name,  nil
  end
end
