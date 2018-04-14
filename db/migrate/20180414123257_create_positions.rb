class CreatePositions < ActiveRecord::Migration
  def change
    create_table :positions do |t|
      t.string :name
      t.text :description
      t.decimal :salary, precision: 16, scale: 2
      t.integer :level
      t.integer :area

      t.timestamps
    end
  end
end
