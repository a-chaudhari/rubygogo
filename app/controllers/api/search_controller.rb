class Api::SearchController < ApplicationController

  def search
    query = params[:q]
    offset = params[:offset]

    if query.length < 3
      render json: []
      return
    end

    @results = Campaign.where("title % ? OR tagline % ?", query,query).offset(offset).limit(13)
    render :index
  end
end
