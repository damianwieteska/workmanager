class Api::ListsController < Api::ApiController
  before_action :set_list, only: [:update, :destroy]

  def create
    @project = Project.find(params[:project_id])
    @list = @project.lists.new(list_params)
    respond_to do |format|
      if @list.save
        format.html { redirect_to project_path @project }
      else
        format.html { redirect_to project_path(@project), flash: { danger: "List name can't be empty." } }
      end
    end
  end

  def update
    @project = Project.find(params[:project_id])
    respond_to do |format|
      if @list.update(list_params)
        format.html { redirect_to project_path @project }
      else
        format.html { redirect_to project_path(@project), flash: { danger: "List name can't be empty." } }
      end
    end
  end

  def destroy
    @project = Project.find(params[:project_id])
    respond_to do |format|
      if @list.destroy
        format.html { redirect_to project_path @project }
      else
        format.html { redirect_to project_path(@project), flash: { danger: "List can't be deleted." } }
      end
    end
  end

  private
    def set_list
      @list = List.find(params[:id])
    end

    def list_params
      params.require(:list).permit(:name)
    end
end
