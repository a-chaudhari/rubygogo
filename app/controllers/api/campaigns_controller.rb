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

  def backers
    start_point = params[:start]
    # debugger
    campaign = Campaign.find_by(id: params[:campaign_id])
    if campaign
      # debugger
      contribs = campaign.contributions.order('id DESC')
      if start_point != nil || start_point != ""
        contribs = contribs.where('created_at < ?', start_point)
      end

      render partial: 'api/campaigns/backers', locals: { contribs: contribs.limit(1).includes(:user)}

    else
      render json: "cannot find that campaign id"
    end

  end

  def index
    @campaigns = Campaign.all
  end


end
