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

  test "should return user data while requesting if autorizated" do
    user = User.create(name: "Naruto", email: "email@gmail.com", password: "password")
    @request.headers["X-Api-Key"] = user.auth_token
    get :user, params: { id: user.id}
    assert_response 200
    jdata = JSON.parse response.body
    assert_equal "Naruto", jdata["user"]["name"]
  end

  test "should return 403 while requesting if not autorizated" do
    user = User.create(name: "Naruto", email: "email@gmail.com", password: "password")
    get :user, params: { id: user.id}
    assert_response 403
  end

  test "should return 404 while requesting with wrong user id" do
    user = User.create(name: "Naruto", email: "email@gmail.com", password: "password")
    @request.headers["X-Api-Key"] = user.auth_token
    get :user, params: { id: "wrong id"}
    assert_response 404
    jdata = JSON.parse response.body
    errors = {"errors-list" => "Wrong id provided"}
    assert_equal errors, jdata["errors"]
  end

  test "should create user while requesting with valid data" do
    @request.headers["Content-Type"] = "application/json"
    users_count = User.all.count
    post :create, params: {
                   user: {
                     name: "Gintoki",
                     email: "lol@xd.ua",
                     password: "password",
                     password_confirmation: "password"
                   }}
    assert_response 201
    assert_equal (users_count + 1), User.all.count
    jdata = JSON.parse response.body
    assert_equal "Gintoki", jdata["user"]["name"]
  end

  test "should return errors while requesting with invalid data" do
    @request.headers["Content-Type"] = "application/json"
    post :create, params: {
                   user: {
                     name: "",
                     email: "lold@dasf.ua",
                     password: "password",
                     password_confirmation: "pasord"
                   }}
    assert_response 422
    jdata = JSON.parse response.body
    errors = {
      "password_confirmation"=>["doesn't match Password"],
      "name"=>["can't be blank", "is too short (minimum is 3 characters)"]
    }
    assert_equal errors, jdata["errors"]
  end
end
