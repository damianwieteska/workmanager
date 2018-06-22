Rails.application.routes.draw do

  root to: 'static_pages#landing'
  get 'landing', to: 'static_pages#landing'

  namespace :api, defaults: { format: :json } do
    mount_devise_token_auth_for 'User', at: 'users', controllers: {
      registrations: 'api/users/registrations'
    }

    resources :projects, only: [:show, :index] do
      get :finished, on: :collection
      patch :leave, on: :member
      resources :lists, only: [:index, :create, :update, :destroy] do
        resources :tasks, only: [:create, :update, :destroy]
      end    
    end

    resources :teams, only: [:index] do
      patch :leave, on: :member
    end

    resources :contracts, only: [:index]
    resources :skills, only: [:index]

    resources :users do
      get :dashboard, on: :member
    end
  end

  namespace :admin do
    resources :tasks, except: [:create, :new]
    resources :lists, expect: [:new, :create, :edit, :update]
    resources :projects
    resources :teams
    resources :skills, except: [:show]
    resources :contracts
    resources :positions
    resources :users
  end
end
