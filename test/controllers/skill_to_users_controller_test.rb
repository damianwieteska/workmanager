require 'test_helper'

class SkillToUsersControllerTest < ActionController::TestCase
  setup do
    @skill_to_user = skill_to_users(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:skill_to_users)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create skill_to_user" do
    assert_difference('SkillToUser.count') do
      post :create, skill_to_user: { level: @skill_to_user.level, skill_id: @skill_to_user.skill_id, user_id: @skill_to_user.user_id }
    end

    assert_redirected_to skill_to_user_path(assigns(:skill_to_user))
  end

  test "should show skill_to_user" do
    get :show, id: @skill_to_user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @skill_to_user
    assert_response :success
  end

  test "should update skill_to_user" do
    patch :update, id: @skill_to_user, skill_to_user: { level: @skill_to_user.level, skill_id: @skill_to_user.skill_id, user_id: @skill_to_user.user_id }
    assert_redirected_to skill_to_user_path(assigns(:skill_to_user))
  end

  test "should destroy skill_to_user" do
    assert_difference('SkillToUser.count', -1) do
      delete :destroy, id: @skill_to_user
    end

    assert_redirected_to skill_to_users_path
  end
end
