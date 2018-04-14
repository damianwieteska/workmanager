class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :description
      t.datetime :start_time
      t.datetime :deadline
      t.integer :priority, default: 0
      t.references :list,  index: true
      t.boolean :done,     default: false

      t.timestamps
    end
  end
end
