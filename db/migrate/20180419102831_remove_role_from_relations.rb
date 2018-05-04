class RemoveRoleFromRelations < ActiveRecord::Migration
  def change
    remove_column :user_to_teams, :role
    remove_column :user_to_projects, :role
  end
end
