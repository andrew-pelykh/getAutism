require "test_helper"
require "json"

class PostsControllerTest < ActionController::TestCase

  def setup
    @user = User.create(name: "Naruto", email: "email@gmail.com", password: "password")
  end

  test "should return posts list if authorizated" do
    @request.headers["X-Api-Key"] = @user.auth_token
    @user.posts.create(content: "post1")
    @user.posts.create(content: "post2")
    get :index
    assert_response 200
    jdata = JSON.parse response.body
    assert_equal 2, jdata["posts"].length
    assert_equal "post1", jdata["posts"][0]["content"]
      assert_equal "Naruto", jdata["posts"][0]["author"]["name"]
  end
end
