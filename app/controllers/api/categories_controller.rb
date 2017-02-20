class Api::CategoriesController < ApplicationController
  def show
    cat = Category.find_by(id: params[:id])
    if cat
      start = params[:start]
      if start == "" || start == nil
        @camps = cat.campaigns.limit(12)
      else
        @camps.cat.campaigns.where('created_at < ?', start)
      end
      render :show 

      end
    else
      render json: "cannot find category with that id", status: 404
    end
  end


end
