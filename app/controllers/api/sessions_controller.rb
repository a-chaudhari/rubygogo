class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      sign_in(@user)
      render partial: 'api/users/user_private', locals: {user: @user}
    else
      render json: {"errors"=>"invalid credentials"}, status: 422
    end
  end

  def destroy
    sign_out
    render json: {}
  end

end
