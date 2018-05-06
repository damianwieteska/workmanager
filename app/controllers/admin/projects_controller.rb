class Admin::ProjectsController < Admin::AdminController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    authorize! :read, Project
    if current_user.admin?
      @projects = Project.all
    else
      @projects = Project.where.not(visibility: Project.visibilities[:secret])
    end
    respond_with(:admin, @projects)
  end

  def show
    authorize! :read, @project
    respond_with(:admin, @project)
  end

  def new
    authorize! :create, Project
    @project = Project.new
    respond_with(:admin, @project)
  end

  def edit
    authorize! :update, @project
  end

  def create
    authorize! :create, Project
    @project = Project.new(project_params)

    respond_to do |format|
      if @project.save
        format.html { redirect_to admin_project_path @project }
      else
        format.html { render :new }
      end
    end
  end

  def update
    authorize! :update, @project
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to admin_project_path @project }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    authorize! :destroy, @project
    @project.destroy
    respond_with(:admin, @project)
  end

  private
    def set_project
      @project = Project.find(params[:id])
    end

    def project_params
      params.require(:project).permit(:name, :description, :visibility, :start_time, :deadline, :priority, team_ids: [], user_ids: [])
    end
end
