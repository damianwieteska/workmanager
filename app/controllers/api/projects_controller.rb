class Api::ProjectsController < Api::ApiController
  before_action :set_project, only: [:show, :leave]
  before_action :set_user, only: [:index, :finished, :leave]

  def index
    @projects = @user.all_projects.where("deadline > ? OR deadline IS NULL", DateTime.now)
    respond_with(@projects)
  end

  def finished
    @projects = @user.all_projects.where("deadline < ?", DateTime.now)
    respond_with(@projects)
  end

  def show
    respond_with(@project)
  end

  def leave
    respond_to do |format|
      if @user.projects.delete(@project)
        format.json { render json: @project, status: :ok }
      else
        format.json { render error: "You can't leave this project.", status: :bad_request }
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
end
