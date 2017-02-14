class Api::UsersController < ApplicationController

  def show
    @user=User.find_by(id: params[:id])
    render partial: 'api/users/public_user'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render partial: 'api/users/public_user'
    else
      render json: @user.errors.full_messages
    end
  end

  def update
  end

  private
  def user_params
    params.require(:user).permit(:email,:password,:firstName,:lastName)
  end

end
