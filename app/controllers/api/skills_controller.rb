class Api::SkillsController < Api::ApiController
  before_action :set_user, only: [:index]

  def index
    @skills = @user ? @user.skills : Skill.all
    respond_with(@skills)
  end

  private
    def set_user
      @user = User.find(params[:user_id]) if params[:user_id]
    end
end
