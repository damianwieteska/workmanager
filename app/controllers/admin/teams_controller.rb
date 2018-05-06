class Admin::TeamsController < Admin::AdminController
  before_action :set_team, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    authorize! :read, Team
    @teams = Team.all
    respond_with(:admin, @teams)
  end

  def show
    authorize! :read, @team
    respond_with(:admin, @team)
  end

  def new
    authorize! :create, Team
    @team = Team.new
    respond_with(:admin, @team)
  end

  def edit
    authorize! :update, @team
  end

  def create
    authorize! :create, Team
    @team = Team.new(team_params)

    respond_to do |format|
      if @team.save
        format.html { redirect_to admin_team_path @team }
      else
        format.html { render :new }
      end
    end
  end

  def update
    authorize! :update, @team
    respond_to do |format|
      if @team.update(team_params)
        format.html { redirect_to admin_team_path @team }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    authorize! :destroy, @team
    @team.destroy
    respond_with(:admin, @team)
  end

  private
    def set_team
      @team = Team.find(params[:id])
    end

    def team_params
      params.require(:team).permit(:name, :description, :durability, user_ids: [])
    end
end
