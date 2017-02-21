class Api::CategoriesController < ApplicationController

  #"all" means all cats
  #possible filters: soonest, richest
  def show
    par = category_params
    # debugger
    if par[:category] == 'all'
      # category = Category.all
      p "in ALL category"
      category = true;
    else
      category = Category.find_by(category: params[:id])
    end

    if category

      if par[:category] == 'all'
        p "in ALL cat"
        query = Campaign.where("not status = ?", 'draft')
      else
        query = category.campaigns.where("not status = ?", 'draft')
      end

      # debugger
      case par[:filter][:funded]
      when "1" #all
        queryp2 = query.where('(current_cash * 100 / goal_amount) BETWEEN 0 AND 25')
      when "2"
        queryp2 = query.where('(current_cash * 100 / goal_amount) BETWEEN 26 AND 75')
      when "3"
        p "yay 3"
        queryp2 = query.where('(current_cash * 100 / goal_amount) > 76')
      else
        queryp2 = query
      end

      # query = category.limit(12)

      case par[:filter][:status]
      when "open"
        queryp3 = queryp2.where(status: 'open')
      when "ended"
        queryp3 = queryp2.where(status: 'ended')
      else
        queryp3= queryp2
      end

      case par[:filter][:goal_type]
      when "fixed"
        queryp4 = queryp3.where(funding_type: 'fixed')
      when "flexible"
        queryp4 = queryp3.where(funding_type: 'flexible')
      else
        queryp4 = queryp3
      end
      # debugger

      # if par[:start] != "" && par[:start] != nil
      #   p(par[:quickfilter])
      #   if par[:quickfilter] == 'soonest'
      #     p("soonest")
      #     queryp5 = queryp4.where('end_date > ?', par[:start])
      #   elsif par[:quickfilter] == 'richest'
      #     queryp5 = queryp4.where('current_cash < ?', par[:start])
      #   end
      # else
      #   queryp5 = queryp4
      # end



      case par[:quickfilter]
      when "soonest"
        queryp5 = queryp4.order('end_date ASC')
      when "richest"
        queryp5 = queryp4.order('current_cash DESC')
      end

      # queryp6 = queryp5.offset()

      if par[:offset] != "" && par[:offset] != nil
        queryp6 = queryp5.offset(par[:offset].to_i)
      else
        queryp6 = queryp5
      end

      @camps = queryp6.limit(12)
      render :show


    else
      render json: "cannot find category with that id", status: 404
    end
  end

  def index
    # cats = Category.all

    render json: Category.all.sort

  end

  private

  def category_params
    params.require(:category).permit(:category, :offset, :quickfilter, filter:[:funded, :goal_type, :status])
  end


end
