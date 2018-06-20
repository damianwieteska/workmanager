class Api::SkillsController < Api::ApiController
  before_action :set_user, only: [:index]

  def index
    @skills = @user.skills
    respond_with(@skills)
  end

  private
    def set_user
      @user = User.find(params[:user_id])
    end
end
