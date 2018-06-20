class Api::TasksController < Api::ApiController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  def create
    @project = Project.find(params[:project_id])
    @task = @project.lists.find(params[:list_id]).tasks.new(task_params)
    respond_to do |format|
      if @task.save
        format.html { redirect_to project_path @project }
      else
        format.html { redirect_to project_path(@project), flash: { danger: "Task can't be saved. Please check fields correctness." } }
      end
    end
  end

  def update
    @project = Project.find(params[:project_id])
    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to project_path @project }
      else
        format.html { redirect_to project_path(@project), flash: { danger: "Task can't be updated. Please check fields correctness." } }
      end
    end
  end

  def destroy
    @project = Project.find(params[:project_id])
    respond_to do |format|
      if @task.destroy
        format.html { redirect_to project_path @project }
      else
        format.html { redirect_to project_path(@project), flash: { danger: "Task can't be deleted." } }
      end
    end
  end

  private
    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:name, :description, :start_time, :deadline, :priority, :list_id, :user_id, :done)
    end
end
