class UserToProjectsController < ApplicationController
  before_action :set_user_to_project, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @user_to_projects = UserToProject.all
    respond_with(@user_to_projects)
  end

  def show
    respond_with(@user_to_project)
  end

  def new
    @user_to_project = UserToProject.new
    respond_with(@user_to_project)
  end

  def edit
  end

  def create
    @user_to_project = UserToProject.new(user_to_project_params)
    @user_to_project.save
    respond_with(@user_to_project)
  end

  def update
    @user_to_project.update(user_to_project_params)
    respond_with(@user_to_project)
  end

  def destroy
    @user_to_project.destroy
    respond_with(@user_to_project)
  end

  private
    def set_user_to_project
      @user_to_project = UserToProject.find(params[:id])
    end

    def user_to_project_params
      params.require(:user_to_project).permit(:role, :user_id, :project_id)
    end
end
