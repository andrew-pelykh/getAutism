require "test_helper"

class UserTest < ActiveSupport::TestCase

  def setup
    @user = User.new(name: "Naruto", email: "andrew@gmail.com",
                       password: "password1111", password_confirmation: "password1111")
  end

  test "should save valid user" do
    assert @user.save, "Didn`t save valid user"
  end

  test "users name should be longer than 3 symbols" do
    @user.name = "a"*3
    assert @user.save, "Didn`t save user with 3 symbols name"
    @user.name = "a"*2
    assert_not @user.save, "Saved user with too short name (less than 3 symbols)"
  end

  test "user name should be unique" do
    @user.save
    same_user = User.new(name: "Naruto", email: "andrew@gmail.com",
                      password: "password1111", password_confirmation: "password1111")
    assert_not same_user.save, "Saved user whose name has already been taken"
  end

  test "user name should be unique in difference cases" do
    @user.save
    same_user = User.new(name: "naruto", email: "andrew@gmail.com",
                      password: "password1111", password_confirmation: "password1111")
    assert_not same_user.save, "Saved user whose name has already been taken"
  end

  test "users name should not  be longer than 20 symbols" do
    @user.name = "a"*20
    assert @user.save, "Didn`t save user with 20 symbols name"
    @user.name = "a"* 21
    assert_not @user.save, "Saved user with too long name (more than 20 symbols)"
  end

  test "users name should be present" do
    @user.name = ""
    assert_not @user.save, "Saved user without name"
  end

  test "users email should be present" do
    @user.email = ""
    assert_not @user.save, "Saved user without name"
  end

  test "format of users email should be valid" do
    @user.email = "not email"
    assert_not @user.save, "Saved user with invalid email"
  end

  test "users email should be unique" do
    @user.save
    same_user = User.new(name: "Naruto", email: "andrew@gmail.com",
                      password: "password1111", password_confirmation: "password1111")
    assert_not same_user.save, "Saved user whose email has already been taken"
  end

  test "users email should be unique in difference cases" do
    @user.save
    same_user = User.new(name: "Naruto", email: "Andrew@gmail.com",
                      password: "password1111", password_confirmation: "password1111")
    assert_not same_user.save, "Saved user whose email has already been taken"
  end

  test "should save email in lower case" do
    @user.email = "Andrew@gmail.com"
    @user.save
    assert_equal  "andrew@gmail.com", @user.email, "Saved user with undowncased email"
  end

  test "users password should be present" do
    @user.password = ""
    @user.password_confirmation = ""
    assert_not @user.save, "Saved user without password"
  end

  test "users password should be longer than 8 symbols" do
    @user.password = "a"*8
    @user.password_confirmation = "a"*8
    assert @user.save, "Didn`t save user with 8 symbols pasword"
    @user.password = "a"*7
    @user.password_confirmation = "a"*7
    assert_not @user.save, "Saved user with too short password (less than 8 symbols)"
  end

  test "users password should not  be longer than 20 symbols" do
    @user.password = "a"*20
    @user.password_confirmation = "a"*20
    assert @user.save, "Didn`t save user with 20 symbols password"
    @user.password = "a"*21
    @user.password_confirmation = "a"*21
    assert_not @user.save, "Saved user with too long password (more than 20 symbols)"
  end

  test "users password confirmation should same as password " do
    @user.password = "password2222"
    assert_not @user.save, "Saved user with invalid password confirmation"
  end
  
end
