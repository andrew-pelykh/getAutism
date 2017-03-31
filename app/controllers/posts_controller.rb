class PostsController < BaseController

  before_action :authorizate_request!

  def index
    posts = []
    Post.order(created_at: :desc).page(params[:page]).per(20).map do |post|
      user = User.find(post.user_id)
      posts.push({
        id: post.id,
        content: post.content,
        createdAt: post.created_at.strftime("%B %d, %Y"),
        author:{
            name: user.name,
            id: user.id,
            avatar: user.avatar_url
          }})
    end
    render json: { posts:  posts }
  end

  def create
    post = @current_user.posts.new(post_params)
    user = @current_user
    if post.save
      render json: {post: {
        id: post.id,
        content: post.content,
        createdAt: post.created_at.strftime("%B %d, %Y"),
        author:{
            name: user.name,
            id: user.id,
            avatar: user.avatar_url
          }}}, status: 201
    else
      render_errors(post.errors, 422)
    end
  end

  private

  def post_params
    params.require(:post).permit(:content)
  end
end
