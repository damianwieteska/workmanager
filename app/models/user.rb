class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :skill_to_users, dependent: :destroy
  has_many :skills, through: :skill_to_users
  has_many :contracts, dependent: :destroy
  has_many :positions, through: :contracts
  has_many :user_to_projects, dependent: :destroy
  has_many :projects, through: :user_to_projects
  has_many :user_to_teams, dependent: :destroy
  has_many :teams, through: :user_to_teams
  has_many :tasks

  enum role: [:client, :user, :leader, :moderator, :admin]

  validates :first_name, :last_name, presence: true

  attr_accessor :skip_password_validation

  def full_name
    "#{ first_name } #{ last_name }"
  end

  def password_required?
    return false if skip_password_validation
    super
  end

  def all_projects
    ids = projects.ids + Project.joins(:teams).where("teams.id IN (?)", teams.map(&:id)).ids
    Project.where(id: ids)
  end
end
