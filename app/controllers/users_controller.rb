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

  def user
    begin
      user = User.find(params[:id])
    rescue
      render_errors({"errors-list" => "Wrong id provided"}, 404) and return
    end
    render json: {
      user: {
        id: user.id,
        name: user.name
      }
    }, status: 200
  end
end
