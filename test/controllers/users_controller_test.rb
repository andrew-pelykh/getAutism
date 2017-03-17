require "test_helper"
require "json"

class UsersControllerTest < ActionController::TestCase

  test "should return error while requesting current_user with no auht token" do
    get :current_user
    assert_response 403
  end

  test "should return error while requesting current_user with invalid auht token" do
    user = User.create(name: "Naruto", email: "email@gmail.com", password: "password")
    @request.headers["X-Api-Key"] = "token"
    get :current_user
    assert_response 403
  end

  test "should return current user while requesting with valid auth token" do
    user = User.create(name: "Naruto", email: "email@gmail.com", password: "password")
    @request.headers["X-Api-Key"] = user.auth_token
    get :current_user
    assert_response 200
    jdata = JSON.parse response.body
    assert_equal "Naruto", jdata["user"]["name"]
  end
end
