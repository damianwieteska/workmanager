class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy, :dashboard]

  respond_to :html

  def index
    authorize! :read, @users
    @users = User.all
    respond_with(@users)
  end

  def show
    authorize! :read, @user
    respond_with(@user)
  end

  def dashboard
    authorize! :update, @user
    @projects = @user.all_projects.where("deadline > ? OR deadline IS NULL", DateTime.now)
    respond_with(@user)
  end

  def new
    authorize! :create, User
    @user = User.new
    respond_with(@user)
  end

  def edit
    authorize! :update, @user
  end

  def create
    authorize! :create, User
    @user = User.new(user_params)
    @user.skip_password_validation = true

    respond_to do |format|
      if @user.save
        format.html { redirect_to dashboard_user_path @user }
      else
        format.html { render :new }
      end
    end
  end

  def update
    authorize! :update, @user
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to dashboard_user_path @user }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    authorize! :destroy, @user
    @user.destroy
    respond_with(@user)
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :first_name, :last_name, :country, :city, :phone, :facebook_url, :linkedin_url, :birthdate, :birth_country, skill_ids: [])
    end
end
