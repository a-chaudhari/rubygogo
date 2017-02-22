class Api::ContributionsController < ApplicationController
  def create
    unless logged_in?
      render json: {login:"You must be logged in to make a contribution"}, status: 401
      return
    end

    contribution = current_user.contributions.new(contribution_params)
    if contribution.visibility == 'other' && contribution.other_name == ''
      render json: {other_name:"Other Name cannot be empty"}, status: 422
      return
    end

    if !contribution.perk.nil?
      if !contribution.perk.enough_inventory?
        render json: {perkquant:"selected perk sold out"}, status: 422
        return
      end
    end

    if(contribution.save)
      # debugger
      contribution.campaign.add_contribution(contribution.amount)
      if !contribution.perk.nil?
        contribution.perk.receive_perk
      end
      render json: contribution
    else
      render json: contribution.errors, status: 422
    end
  end




  private
  def contribution_params
    params.require(:contribution).permit(:campaign_id, :perk_id, :amount, :other_name, :visibility)
  end


end
