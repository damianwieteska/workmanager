class Skill < ActiveRecord::Base
  has_many :skill_to_users, dependent: :destroy
  has_many :users, through: :skill_to_users

  enum kind: [:programming_language, :framework, :application, :database, :language, :soft]

  validates :name, :kind, presence: true
end
