class AddOtherColumn < ActiveRecord::Migration
  def change
    add_column :contributions, :other_name, :string
  end
end
