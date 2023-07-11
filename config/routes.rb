Rails.application.routes.draw do
  resources :category_infos
  resources :categories, only: [:index]
end
