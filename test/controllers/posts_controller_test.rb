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
    assert_equal "post2", jdata["posts"][0]["content"]
    assert_equal "Naruto", jdata["posts"][0]["author"]["name"]
  end

  test "should create post with valid data" do
    @request.headers["X-Api-Key"] = @user.auth_token
    @request.headers["Content-Type"] = "application/json"
    post :create, params: {
      post: {
        content: "Some text"
      }}
    assert_response 201
    jdata = JSON.parse response.body
    assert_equal @user.name, jdata["post"]["author"]["name"]
  end


  test "should return post1s errors with invalid data" do
    @request.headers["X-Api-Key"] = @user.auth_token
    @request.headers["Content-Type"] = "application/json"
    post :create, params: {
      post: {
        content: "a"*1001
      }}
    assert_response 422
    jdata = JSON.parse response.body
    errors = {"content"=>["is too long (maximum is 1000 characters)"]}
    assert_equal errors, jdata["errors"]
  end
end
