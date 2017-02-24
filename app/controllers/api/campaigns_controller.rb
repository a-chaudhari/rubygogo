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
    #creates an empty template with just the total amount and title
    unless logged_in?
      render json: "you need to log in first", status: 401
      return
    end

    camp = Campaign.new(new_params)
    camp.user = current_user
    camp.duration = 60
    camp.category="tech"
    camp.funding_type="fixed"
    if camp.save
      render json: camp
    else
      render json: camp.errors, status: 422
    end
  end

  def editor
    camp = Campaign.find_by(id: params[:campaign_id])
    unless logged_in?
      render json: "you need to log in first", status: 401
      return
    end

    unless logged_in? && camp.user == current_user
      render json: "unauthorized", status: 401
      return
    end

    # debugger
    # debugger
    # output = camp.attributes
    # output[:]
    render partial: 'api/campaigns/editor', locals:{camp: camp}

  end

  def update
    # debugger
    camp = Campaign.find_by(id: params[:campaign][:id])
    unless camp
      render json: "cannot find that campaign id", status: 404
      return
    end

    unless logged_in? && camp.user == current_user
      render json: "unauthorized", status: 401
      return
    end

    if camp.update(edit_params)
      render partial: 'api/campaigns/editor', locals:{camp: camp}
    else
      render json: camp.errors, status: 422
    end


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

      render partial: 'api/campaigns/backers', locals: { contribs: contribs.limit(10).includes(:user), currency: campaign.currency}

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
    start_point = params[:start]
    campaign = Campaign.find_by(id: params[:campaign_id])
    if campaign
      comments = campaign.comments.where('parent_id IS NULL').order('id DESC').includes(children: [:user] )
      if start_point != nil && start_point != ""
        comments = comments.where('created_at < ?', start_point)
      end

      render partial: 'api/campaigns/comments', locals: { comments: comments.limit(10).includes(:user)}
    else
      render json: "cannot find that campaign id", status: 404
    end
  end

  def create_comment
    campaign = Campaign.find_by(id: params[:campaign_id])
    if campaign
      if logged_in? && (campaign.contributors.include?(current_user) || campaign.user == current_user)
        comment = campaign.comments.new(comment_params)
        comment.user = current_user
        if comment.save
          render partial: 'api/campaigns/comment', locals: { comment: comment}
        else
          render json: comment.errors, status: 422
        end
      else
        render json: "need to be logged in and a contributor to comment", status: 401
      end
    else
      render json: "cannot find that campaign id", status: 404
    end
  end

  def index
    @campaigns = Campaign.all
  end

  private
  def update_params
    params.require(:update).permit(:body)
  end

  def comment_params
    params.require(:comment).permit(:body, :parent_id)
  end

  def new_params
    params.require(:campaign).permit(:title, :goal_amount, :currency)
  end

  def edit_params
    params.require(:campaign).permit(:title, :goal_amount, :currency, :tagline, :duration, :funding_type, :video_url, :status, :category, :overview_text,:overview_img, :campaign_card_img, :main_img, :pitch_text)
  end



end
