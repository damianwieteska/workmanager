class SkillToUsersController < ApplicationController
  before_action :set_skill_to_user, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @skill_to_users = SkillToUser.all
    respond_with(@skill_to_users)
  end

  def show
    respond_with(@skill_to_user)
  end

  def new
    @skill_to_user = SkillToUser.new
    respond_with(@skill_to_user)
  end

  def edit
  end

  def create
    @skill_to_user = SkillToUser.new(skill_to_user_params)
    @skill_to_user.save
    respond_with(@skill_to_user)
  end

  def update
    @skill_to_user.update(skill_to_user_params)
    respond_with(@skill_to_user)
  end

  def destroy
    @skill_to_user.destroy
    respond_with(@skill_to_user)
  end

  private
    def set_skill_to_user
      @skill_to_user = SkillToUser.find(params[:id])
    end

    def skill_to_user_params
      params.require(:skill_to_user).permit(:level, :user_id, :skill_id)
    end
end
