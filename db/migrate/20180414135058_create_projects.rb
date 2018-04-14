class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.integer :visibility, default: 0
      t.datetime :start_time
      t.datetime :deadline
      t.integer :priority,   default: 0

      t.timestamps
    end
  end
end
