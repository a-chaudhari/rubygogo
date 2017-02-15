class Api::CampaignsController < ApplicationController
  def show
    @campaign = Campaign.find_by(id: params[:id])
    if(@campaign)
      render :show
    else
      render json: "no campaign found with that id", status: 422
    end
  end

  def create
  end

  def update
  end

  def index
    @campaigns = Campaign.all
  end


end
