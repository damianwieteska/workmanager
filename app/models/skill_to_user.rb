class SkillToUser < ActiveRecord::Base
  belongs_to :user
  belongs_to :skill

  validates :user, :skill, presence: true
end
