class Api::ContractsController < Api::ApiController
  before_action :set_user, only: [:index]

  def index
    @contracts = @user.contracts
    respond_with(@contracts)
  end

  private
    def set_user
      @user = User.find(params[:user_id])
    end
end
