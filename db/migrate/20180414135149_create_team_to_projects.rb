class CreateTeamToProjects < ActiveRecord::Migration
  def change
    create_table :team_to_projects do |t|
      t.references :team, index: true
      t.references :project, index: true

      t.timestamps
    end
  end
end
