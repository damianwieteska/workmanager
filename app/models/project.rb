class Project < ActiveRecord::Base
  has_many :lists, -> { order :sort }, dependent: :destroy
  has_many :user_to_projects, dependent: :destroy
  has_many :users, through: :user_to_projects
  has_many :team_to_projects, dependent: :destroy
  has_many :teams, through: :team_to_projects

  enum visibility: [:visible, :hidden, :secret]
  enum priority: [:very_low, :low, :normal, :important, :critical]

  validates :name, :visibility, :priority, :start_time, presence: true

  def is_visible_for?(user)
    visible? || has_member?(user)
  end

  def has_member?(user)
    users.include?(user) || teams.collect(&:users).include?(user)
  end
end
