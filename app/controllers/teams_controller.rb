class TeamsController < ApplicationController
  before_action :set_team, only: [:leave]
  before_action :set_user, only: [:leave]

  respond_to :html

  def leave
    respond_to do |format|
      if @user.teams.delete(@team)
        format.html { redirect_to dashboard_user_path @user }
      else
        format.html { redirect_to dashboard_user_path(@user), flash: { danger: "You can't leave this team." } }
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
