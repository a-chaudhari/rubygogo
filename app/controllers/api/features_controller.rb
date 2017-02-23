class Api::FeaturesController < ApplicationController
  def topfive
    @camps = Campaign.order('id').limit(5)
  end





end
