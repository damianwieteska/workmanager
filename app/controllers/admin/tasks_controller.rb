class Admin::TasksController < Admin::AdminController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    authorize! :read, Task
    @tasks = Task.all
    respond_with(:admin, @tasks)
  end

  def show
    authorize! :read, @task
    respond_with(:admin, @task)
  end

  def edit
    authorize! :update, @task
  end

  def update
    authorize! :update, @task
    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to admin_task_path @task }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    authorize! :destroy, @task
    @task.destroy
    respond_with(:admin, @task)
  end

  private
    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:name, :description, :start_time, :deadline, :priority, :done, :user_id)
    end
end
