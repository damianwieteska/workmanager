class RemoveLevelFromSkillToUsers < ActiveRecord::Migration
  def change
    remove_column :skill_to_users, :level, :integer
  end
end
