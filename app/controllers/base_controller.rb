class BaseController < ActionController::API

  def render_errors(errors, status)
    render json: { errors: errors }, status: status
  end

end
