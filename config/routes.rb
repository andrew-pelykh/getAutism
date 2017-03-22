Rails.application.routes.draw do

  root "application#home"

  post "/log_in", to: "sessions#create"
  delete "/log_out", to: "sessions#destroy"

  get "/current_user", to: "users#current_user"
end
