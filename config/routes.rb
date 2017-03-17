Rails.application.routes.draw do

  root "application#home"

  resources :sessions, only: [:create, :destroy]
end
