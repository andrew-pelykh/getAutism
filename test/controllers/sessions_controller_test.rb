require "test_helper"
require "json"

class SessionsControllerTest < ActionController::TestCase

  test "should return error when requesting with invalid data" do
    user = User.create(name: "Naruto", email: "email@gmail.com", password: "password")
    post :create, params: {
                    user: {
                      email: "email@gmail.com",
                      password: "not_password"
                    }}
    assert_response 403
    jdata = JSON.parse response.body
    login_errors =  { "login" => "Invalid email or password" }
    assert_equal login_errors, jdata["errors"]
  end

  test "should return user and auth token when requesting with valid data" do
    user = User.create(name: "Naruto", email: "email@gmail.com", password: "password")
    post :create, params: {
                    user: {
                      email: "email@gmail.com",
                      password: "password"
                    }}
    assert_response 200
    jdata = JSON.parse response.body
    assert_equal user.auth_token, jdata["user"]["token"]
  end

  test "should regenerate user auth token after logout" do
    user = User.create(name: "Naruto", email: "email@gmail.com", password: "password")
    old_token = user.auth_token
    delete :destroy, params: { id: user.id}
    assert_response 204
    user = User.find(user.id)
    refute_equal old_token, user.auth_token
  end

end
