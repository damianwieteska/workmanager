class CreateSkillToUsers < ActiveRecord::Migration
  def change
    create_table :skill_to_users do |t|
      t.integer :level
      t.references :user, index: true
      t.references :skill, index: true

      t.timestamps
    end
  end
end
