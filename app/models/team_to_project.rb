class TeamToProject < ActiveRecord::Base
  belongs_to :team
  belongs_to :project
end
