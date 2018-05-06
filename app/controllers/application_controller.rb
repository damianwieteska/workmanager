class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authenticate_user!

  rescue_from "AccessGranted::AccessDenied" do |exception|
    redirect_to dashboard_user_path(current_user), flash: { danger: "You don't have permission to access this page." }
  end

  protected
  def after_sign_in_path_for(resource)
    dashboard_user_path(current_user)
  end

  def after_sign_out_path_for(resource_or_scope)
    root_path
  end
end
