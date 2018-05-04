class Team < ActiveRecord::Base
  has_many :user_to_teams, dependent: :destroy
  has_many :users, through: :user_to_teams
  has_many :team_to_projects, dependent: :destroy
  has_many :projects, through: :team_to_projects

  enum durability: [:temprorary, :permanent, :special]

  validates :name, :durability, presence: true
end
