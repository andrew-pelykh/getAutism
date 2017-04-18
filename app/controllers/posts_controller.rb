class PostsController < BaseController

  before_action :authorizate_request!

  def index
    posts = []
    Post.order(created_at: :desc).page(params[:page]).per(20).map do |post|
      user = User.find(post.user_id)
      if post.images.first
        image = post.images.first.image_url
      end
      posts.push({
        id: post.id,
        content: content_preview(post.content),
        image: image,
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
    images = params[:images]
    if post.save
       if images
         images.each do |image|
           post.images.create(user_id: user.id, image: image)
         end
       end
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
    params.require(:post).permit(:content, :images)
  end

  def content_preview content
    (content.length >= 297)? content.slice(0..297) + "..." : content
  end
end
