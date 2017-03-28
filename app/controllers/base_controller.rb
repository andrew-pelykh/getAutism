class BaseController < ActionController::API
    
  def render_errors(errors, status)
    render json: { errors: errors }, status: status
  end

  def authorizate_request!
    token = request.headers["X-Api-Key"]
    @current_user ||= User.find_by(auth_token: token)
    head 403 and return unless @current_user
  end
end
