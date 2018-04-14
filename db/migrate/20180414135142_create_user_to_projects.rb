class CreateUserToProjects < ActiveRecord::Migration
  def change
    create_table :user_to_projects do |t|
      t.integer :role
      t.references :user, index: true
      t.references :project, index: true

      t.timestamps
    end
  end
end
