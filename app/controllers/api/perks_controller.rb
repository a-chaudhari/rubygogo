class Api::PerksController < ApplicationController

  def index
    camp = Campaign.find_by(id: params[:campaign_id])
    unless camp
      render json: "cannot find campaign id", status: 404
      return
    end

    render json: camp.perks
  end

  def create
    camp = Campaign.find_by(id: params[:campaign_id])
    unless camp
      render json: "cannot find campaign id", status: 404
      return
    end
    perk = camp.perks.new(perks_params)
    if perk.save
      render json: camp.perks
    else
      render json: perk.errors, status: 422
    end
  end

  def update
    perk = Perk.find_by(id: params[:id])
    unless perk
      render json: "cannot find perk id", status: 404
      return
    end
    if  perk.update(perks_params)
      render json: perk.campaign.perks
    else
      render json: perk.errors, status: 422
    end

  end

  def destroy
    perk = Perk.find_by(id: params[:id])
    unless perk
      render json: "cannot find perk id", status: 404
      return
    end
    perk.destroy

    render json: perk.campaign.perks
  end

  private
  def perks_params
    params.require(:perk).permit(:title, :campaign_id, :price, :total_number, :eta, :description)
  end


end
