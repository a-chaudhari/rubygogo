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
      render json: perk
    else
      render json: perk.errors, status: 422
    end
  end

  def update
    # camp = Campaign.find_by(id: params[:campaign_id])
    perk = Perk.find_by(id: params[:perk_id])
    unless perk
      render json: "cannot find perk id", status: 404
      return
    end
    if  perk.update(perks_params)
      render json: perk
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

    render json: {}
  end

  private
  def perks_params
    params.require(:perks).permit(:id, :title, :campaign_id, :price, :number_claimed, :total_number, :eta)
  end


end
