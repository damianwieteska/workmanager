class CreateUserToTeams < ActiveRecord::Migration
  def change
    create_table :user_to_teams do |t|
      t.integer :role
      t.references :user, index: true
      t.references :team, index: true

      t.timestamps
    end
  end
end
