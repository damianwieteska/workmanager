require 'test_helper'

class UserToTeamsControllerTest < ActionController::TestCase
  setup do
    @user_to_team = user_to_teams(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:user_to_teams)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create user_to_team" do
    assert_difference('UserToTeam.count') do
      post :create, user_to_team: { role: @user_to_team.role, team_id: @user_to_team.team_id, user_id: @user_to_team.user_id }
    end

    assert_redirected_to user_to_team_path(assigns(:user_to_team))
  end

  test "should show user_to_team" do
    get :show, id: @user_to_team
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @user_to_team
    assert_response :success
  end

  test "should update user_to_team" do
    patch :update, id: @user_to_team, user_to_team: { role: @user_to_team.role, team_id: @user_to_team.team_id, user_id: @user_to_team.user_id }
    assert_redirected_to user_to_team_path(assigns(:user_to_team))
  end

  test "should destroy user_to_team" do
    assert_difference('UserToTeam.count', -1) do
      delete :destroy, id: @user_to_team
    end

    assert_redirected_to user_to_teams_path
  end
end
