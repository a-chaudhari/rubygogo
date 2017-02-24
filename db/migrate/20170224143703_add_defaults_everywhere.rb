class AddDefaultsEverywhere < ActiveRecord::Migration
  def change
    change_column_default :campaigns, :tagline, ""
    change_column_default :campaigns, :overview_text, ""
    change_column_default :campaigns, :pitch_text, ""
    change_column_default :perks, :eta, ""
    change_column_default :users, :address, ""
    change_column_default :users, :city,""
    change_column_default :users, :postal_code,""
    change_column_default :users, :short_desc,""
    change_column_default :users, :about_me,""
    change_column_default :users, :country,""
  end
end
