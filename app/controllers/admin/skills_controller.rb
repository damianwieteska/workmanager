class Admin::SkillsController < Admin::AdminController
  before_action :set_skill, only: [:edit, :update, :destroy]

  respond_to :html, :json

  def index
    authorize! :read, Skill
    @skills = Skill.all
  end

  def new
    authorize! :create, Skill
    @skill = Skill.new
  end

  def edit
    authorize! :update, @skill
  end

  def create
    authorize! :create, Skill
    @skill = Skill.new(skill_params)

    respond_to do |format|
      if @skill.save
        format.html { redirect_to admin_skills_path }
      else
        format.html { render :new }
      end
    end
  end

  def update
    authorize! :update, @skill
    respond_to do |format|
      if @skill.update(skill_params)
        format.html { redirect_to admin_skills_path }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    authorize! :destroy, @skill
    @skill.destroy
    respond_to do |format|
      format.html { redirect_to admin_skills_path }
    end
  end

  private
    def set_skill
      @skill = Skill.find(params[:id])
    end

    def skill_params
      params.require(:skill).permit(:name, :kind)
    end
end
