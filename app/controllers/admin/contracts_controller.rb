class Admin::ContractsController < Admin::AdminController
  before_action :set_contract, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    authorize! :read, Contract
    @contracts = Contract.all
    respond_with(:admin, @contracts)
  end

  def show
    authorize! :read, @contract
    respond_with(:admin, @contract)
  end

  def new
    authorize! :create, Contract
    @contract = Contract.new
    respond_with(:admin, @contract)
  end

  def edit
    authorize! :update, @contract
  end

  def create
    authorize! :create, Contract
    @contract = Contract.new(contract_params)
    respond_to do |format|
      if @contract.save
        format.html { redirect_to admin_contract_path @contract }
      else
        format.html { render :new }
      end
    end
  end

  def update
    authorize! :update, @contract
    respond_to do |format|
      if @contract.update(contract_params)
        format.html { redirect_to admin_contract_path @contract }
      else
        format.html { render :new }
      end
    end
  end

  def destroy
    authorize! :destroy, @contract
    @contract.destroy
    respond_with(:admin, @contract)
  end

  private
    def set_contract
      @contract = Contract.find(params[:id])
    end

    def contract_params
      params.require(:contract).permit(:start, :end, :salary_percentage, :user_id, :position_id)
    end
end
