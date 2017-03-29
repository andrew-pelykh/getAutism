require "test_helper"

class PostTest < ActiveSupport::TestCase

  def setup
    @post = Post.new(content: "text", user_id: 1)
  end

  test "post`s content should be less than 301 symbols" do
    @post.content = "a" * 1001
    assert_not @post.valid?, "post`s content is too long(301 symbols)"
    @post.content = "a" * 1000
    assert @post.valid?, "post`s content should be able to be 300 symbols"
  end
end
