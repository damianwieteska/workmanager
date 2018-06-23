class Api::TasksController < Api::ApiController
  before_action :set_task, only: [:show, :edit, :update, :destroy]
  before_action :set_list, only: [:index]

  def index
    @tasks = @list.tasks
    respond_with(@tasks)
  end

  def create
    @project = Project.find(params[:project_id])
    @task = @project.lists.find(params[:list_id]).tasks.new(task_params)
    respond_to do |format|
      if @task.save
        format.json { respond_with(@task) }
      else
        format.json { render json: { error: @task.errors.full_messages }, status: :bad_request }
      end
    end
  end

  def update
    @project = Project.find(params[:project_id])
    respond_to do |format|
      if @task.update(task_params)
        format.json { respond_with(@task) }
      else
        format.json { render json: { error: @task.errors.full_messages }, status: :bad_request }
      end
    end
  end

  def destroy
    @project = Project.find(params[:project_id])
    respond_to do |format|
      if @task.destroy
        format.json { respond_with(@task) }
      else
        format.json { render json: { error: @task.errors.full_messages }, status: :bad_request }
      end
    end
  end

  private
    def set_task
      @task = Task.find(params[:id])
    end

    def set_list
      @list = List.find(params[:list_id])
    end

    def task_params
      params.require(:task).permit(:name, :description, :start_time, :deadline, :priority, :list_id, :user_id, :done)
    end
end
