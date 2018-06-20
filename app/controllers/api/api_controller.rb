class Api::ApiController < ApplicationController
  include DeviseTokenAuth::Concerns::SetUserByToken
  before_action :configure_permitted_parameters, if: :devise_controller?
  respond_to :json

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :first_name
    #TODO: Dodać wszystkie
  end
end
