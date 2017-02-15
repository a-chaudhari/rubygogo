class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      sign_in(@user)
      render partial: 'api/users/public_user'
    else
      # debugger
      render json: {"errors"=>"invalid credentials"}, status: 422
    end
  end

  def destroy
    sign_out
    render json: {}
  end

end
