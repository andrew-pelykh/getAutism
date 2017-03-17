Rails.application.routes.draw do

  root "application#home"

  resources :sessions, only: [:create, :destroy]

  get "/current_user",to: "users#current_user"
end
