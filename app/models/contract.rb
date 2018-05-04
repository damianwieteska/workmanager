class Contract < ActiveRecord::Base
  belongs_to :user
  belongs_to :position

  validates :user, :position, :start, :salary_percentage, presence: true
end
