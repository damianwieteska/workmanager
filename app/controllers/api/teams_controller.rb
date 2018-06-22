class Api::TeamsController < Api::ApiController
  before_action :set_team, only: [:leave]
  before_action :set_user, only: [:leave, :index]

  def index
    @teams = @user.teams
    respond_with(@teams)
  end

  def leave
    respond_to do |format|
      if @user.teams.delete(@team)
        format.json { render json: @team, status: :ok }
      else
        format.json { render error: "You can't leave this team.", status: :bad_request }
      end
    end
  end

  private
    def set_team
      @team = Team.find(params[:id])
    end

    def set_user
      @user = User.find(params[:user_id])
    end
end
