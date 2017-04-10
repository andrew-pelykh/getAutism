class MessagesController < BaseController

  before_action :authorizate_request!

  def index
    chat = ChatRoom.find(params[:id])
    render json: { messages: chat.messages.order(created_at: :desc).page(params[:page]).per(20)} 
  end
end
