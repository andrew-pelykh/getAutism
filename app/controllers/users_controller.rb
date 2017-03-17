class UsersController < BaseController

  before_action :authorizate_request!

  def current_user
    render json: {
      user: {
        id: @current_user.id,
        name: @current_user.name
      }
    }, status: 200
  end
end
