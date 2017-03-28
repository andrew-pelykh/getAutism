class PostsController < BaseController

  before_action :authorizate_request!

  def index
    posts = []
    Post.all.map do |post|
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
end
