class Admin::PositionsController < Admin::AdminController
  before_action :set_position, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    authorize! :read, Position
    @positions = Position.all
    respond_with(:admin, @positions)
  end

  def show
    authorize! :read, @position
    respond_with(:admin, @position)
  end

  def new
    authorize! :create, Position
    @position = Position.new
    respond_with(:admin, @position)
  end

  def edit
    authorize! :update, @position
  end

  def create
    authorize! :create, Position
    @position = Position.new(position_params)

    respond_to do |format|
      if @position.save
        format.html { redirect_to admin_position_path @position }
      else
        format.html { render :new }
      end
    end
  end

  def update
    authorize! :update, @position
    respond_to do |format|
      if @position.update(position_params)
        format.html { redirect_to admin_position_path @position }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    authorize! :destroy, @position
    @position.destroy
    respond_with(:admin, @position)
  end

  private
    def set_position
      @position = Position.find(params[:id])
    end

    def position_params
      params.require(:position).permit(:name, :description, :salary, :level, :area)
    end
end
