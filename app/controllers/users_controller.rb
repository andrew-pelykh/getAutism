class UsersController < BaseController

  before_action :authorizate_request!, only: [:current_user, :user, :index]

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

  def create
    user = User.new(user_params)
    if user.save
      render json: { user: { id: user.id, name: user.name,
                       token: user.auth_token }}, status: 201
    else
      render_errors(user.errors, 422)
    end
  end

  def index
    users = []
    User.all.map do |user|
      users.push({ id: user.id, name: user.name})
    end
    render json: { users: users }
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
