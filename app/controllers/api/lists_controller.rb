class Api::ListsController < Api::ApiController
  before_action :set_list, only: [:update, :destroy]
  before_action :set_project, only: [:index]

  def index
    @lists = @project.lists
    respond_with(@lists)
  end

  def create
    @project = Project.find(params[:project_id])
    @list = @project.lists.new(list_params)
    respond_to do |format|
      if @list.save
        format.json { respond_with(@list) }
      else
        format.json { render json: { error: @list.errors.full_messages }, status: :bad_request }
      end
    end
  end

  def update
    @project = Project.find(params[:project_id])
    respond_to do |format|
      if @list.update(list_params)
        format.json { respond_with(@list) }
      else
        format.json { render json: { error: @list.errors.full_messages }, status: :bad_request }
      end
    end
  end

  def destroy
    @project = Project.find(params[:project_id])
    respond_to do |format|
      if @list.destroy
        format.json
      else
        format.json { render json: { error: @list.errors.full_messages }, status: :bad_request }
      end
    end
  end

  private
    def set_list
      @list = List.find(params[:id])
    end

    def set_project
      @project = Project.find(params[:project_id])
    end

    def list_params
      params.require(:list).permit(:name)
    end
end
