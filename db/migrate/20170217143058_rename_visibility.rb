class RenameVisibility < ActiveRecord::Migration
  def change
    rename_column :contributions, :visbility, :visibility
  end
end
