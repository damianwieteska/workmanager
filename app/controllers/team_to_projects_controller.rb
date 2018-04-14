class TeamToProjectsController < ApplicationController
  before_action :set_team_to_project, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @team_to_projects = TeamToProject.all
    respond_with(@team_to_projects)
  end

  def show
    respond_with(@team_to_project)
  end

  def new
    @team_to_project = TeamToProject.new
    respond_with(@team_to_project)
  end

  def edit
  end

  def create
    @team_to_project = TeamToProject.new(team_to_project_params)
    @team_to_project.save
    respond_with(@team_to_project)
  end

  def update
    @team_to_project.update(team_to_project_params)
    respond_with(@team_to_project)
  end

  def destroy
    @team_to_project.destroy
    respond_with(@team_to_project)
  end

  private
    def set_team_to_project
      @team_to_project = TeamToProject.find(params[:id])
    end

    def team_to_project_params
      params.require(:team_to_project).permit(:team_id, :project_id)
    end
end
