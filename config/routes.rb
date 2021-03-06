Rails.application.routes.draw do

  root to: 'static_pages#root'
  namespace :api , defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      get 'contributions', to: 'users#contributions'
      patch 'contributions', to: 'users#update_contribution'
      get 'campaigns', to: 'users#campaigns'
      get 'activity', to: 'users#activity'
    end
    resource :session, only: [:create, :destroy]
    resources :campaigns, only: [:create, :show, :index, :update] do
      get 'backers', to: 'campaigns#backers'
      get 'updates', to: 'campaigns#updates'
      post 'updates', to: 'campaigns#create_update'
      get 'comments', to: 'campaigns#comments'
      post 'comments', to: 'campaigns#create_comment'
      get 'editor', to: 'campaigns#editor'
      resources :perks, only: [:index, :create]
    end
    resources :perks, only: [:update, :destroy]
    resources :contributions, only: [:create]
    resources :categories, only: [:index, :show] do
    end
    # get 'allcats', to: 'categories#all_cats'
    get 'topfive', to: 'features#topfive'
    get 'search/:q', to: 'search#search'

  end


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
