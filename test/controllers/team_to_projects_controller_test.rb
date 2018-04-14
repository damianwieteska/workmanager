require 'test_helper'

class TeamToProjectsControllerTest < ActionController::TestCase
  setup do
    @team_to_project = team_to_projects(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:team_to_projects)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create team_to_project" do
    assert_difference('TeamToProject.count') do
      post :create, team_to_project: { project_id: @team_to_project.project_id, team_id: @team_to_project.team_id }
    end

    assert_redirected_to team_to_project_path(assigns(:team_to_project))
  end

  test "should show team_to_project" do
    get :show, id: @team_to_project
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @team_to_project
    assert_response :success
  end

  test "should update team_to_project" do
    patch :update, id: @team_to_project, team_to_project: { project_id: @team_to_project.project_id, team_id: @team_to_project.team_id }
    assert_redirected_to team_to_project_path(assigns(:team_to_project))
  end

  test "should destroy team_to_project" do
    assert_difference('TeamToProject.count', -1) do
      delete :destroy, id: @team_to_project
    end

    assert_redirected_to team_to_projects_path
  end
end
