class MessagesController < BaseController

  before_action :authorizate_request!

  def index
    chat = ChatRoom.find(params[:id])
    render json: { messages: chat.messages.page(params[:page])}
  end
end
