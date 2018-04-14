class UserToTeamsController < ApplicationController
  before_action :set_user_to_team, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @user_to_teams = UserToTeam.all
    respond_with(@user_to_teams)
  end

  def show
    respond_with(@user_to_team)
  end

  def new
    @user_to_team = UserToTeam.new
    respond_with(@user_to_team)
  end

  def edit
  end

  def create
    @user_to_team = UserToTeam.new(user_to_team_params)
    @user_to_team.save
    respond_with(@user_to_team)
  end

  def update
    @user_to_team.update(user_to_team_params)
    respond_with(@user_to_team)
  end

  def destroy
    @user_to_team.destroy
    respond_with(@user_to_team)
  end

  private
    def set_user_to_team
      @user_to_team = UserToTeam.find(params[:id])
    end

    def user_to_team_params
      params.require(:user_to_team).permit(:role, :user_id, :team_id)
    end
end
