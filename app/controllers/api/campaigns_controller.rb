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

  def updates
    campaign=Campaign.find_by(id: params[:campaign_id])
    if(campaign)
      updates = campaign.updates.order(created_at: :desc).includes(:user)
      render partial: 'api/campaigns/updates', locals: {updates: updates}

    else
      render json: "cannot find that campaign id", status: 404
    end
  end

  def backers
    start_point = params[:start]
    # debugger
    campaign = Campaign.find_by(id: params[:campaign_id])
    if campaign
      # debugger
      contribs = campaign.contributions.order('id DESC')
      if start_point != nil && start_point != ""
        contribs = contribs.where('created_at < ?', start_point)
      end

      render partial: 'api/campaigns/backers', locals: { contribs: contribs.limit(1).includes(:user), currency: campaign.currency}

    else
      render json: "cannot find that campaign id", status: 404
    end
  end

  def create_update
    campaign = Campaign.find_by(id: params[:campaign_id])
    unless logged_in? && current_user == campaign.user
      render json: "unauthorized", status: 401
      return
    end

    if campaign
      update = Update.new(update_params)
      update.campaign = campaign
      update.user = current_user
      if update.save
        render partial: 'api/campaigns/update', locals: { update: update}
      else
        render json: {errors: json.errors}, status: 422
      end
    else
      render json: "cannot find that campaign id", status: 404
    end
  end

  def comments
  end

  def create_comment
  end

  def index
    @campaigns = Campaign.all
  end

  private
  def update_params
    params.require(:update).permit(:body)
  end


end
