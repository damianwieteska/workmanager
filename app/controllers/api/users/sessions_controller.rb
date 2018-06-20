# frozen_string_literal: true

class Api::Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
  end

  # POST /resource/sign_in
  #def create
  #  sign_in(User, params[:user])
  #  if true
  #    render json: token, status: :ok
  #  else
  #    render json: { error: "Wrong email or password" }, status: :unauthorized # or 401
  #  end
  #end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
