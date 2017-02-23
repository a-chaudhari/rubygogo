class Api::UsersController < ApplicationController

  def show
    @user=User.find_by(id: params[:id])
    if(logged_in? &&  @user.id == current_user.id)
      render partial: 'api/users/user_private', locals: {user: @user}
    else
      render partial: 'api/users/user', locals: {user: @user}
    end
  end

  # def privateshow
  #   @user=User.find_by(id: params[:id])
  #   if @user.id == current_user
  #     render partial: 'api/users/user_private', user: @user
  #   else
  #     render json: {"unauthorized"}, status: 401
  #   end
  # end

  def contributions
    user=User.find_by(id: params[:user_id])
    if(user)
      if logged_in? && user == current_user
        render partial: 'api/users/contributions', locals: {contributions: user.contributions.includes(:campaign)}
      else
        render json: "unauthorized", status: 401
      end
    else
      render json: "cannot find user id", status: 404
    end
  end

  def update_contribution
  end

  def campaigns
    user=User.find_by(id: params[:user_id])
    if(user)
      render partial: 'api/users/campaigns', locals: {user: user}
    else
      render json: "cannot find user id", status: 404
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render partial: 'api/users/user_private', locals: {user: @user}
    else
      # debugger
      render json: @user.errors.messages, status: 422
    end
  end

  def update
    # debugger
    user = User.find_by(id: params[:user][:id])
    if user && user.id == current_user.id
      user.update(user_params)
      session[:session_token]=user.session_token
      render partial: 'api/users/user_private', locals: {user: user}
    else
      render json: 'unauthorized', status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:email,:password,:firstName,:lastName, :avatar_img, :city, :short_desc, :about_me, :profile_img, :country, :address, :postal_code)
  end

  private
  def contribution_params
    params.require(:contribution).permit(:visibility)
  end

end
