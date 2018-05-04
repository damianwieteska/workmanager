class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :leave]
  before_action :set_user, only: [:index, :finished, :leave]

  respond_to :html

  def index
    authorize! :read, Project
    @projects = @user.all_projects.where("deadline > ? OR deadline IS NULL", DateTime.now)
    respond_with(@projects)
  end

  def finished
    authorize! :read, Project
    @projects = @user.all_projects.where("deadline < ?", DateTime.now)
    respond_with(@projects)
  end

  def show
    authorize! :read, @project
    respond_with(@project)
  end

  def leave
    respond_to do |format|
      if @user.projects.delete(@project)
        format.html { redirect_to dashboard_user_path @user }
      else
        format.html { redirect_to project_path(@project), flash: { danger: "You can't leave this project." } }
      end
    end
  end

  private
    def set_project
      @project = Project.find(params[:id])
    end

    def set_user
      @user = User.find(params[:user_id])
    end

    def project_params
      params.require(:project).permit(:name, :description, :visibility, :start_time, :deadline, :priority)
    end
end
