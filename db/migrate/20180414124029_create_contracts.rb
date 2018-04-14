class CreateContracts < ActiveRecord::Migration
  def change
    create_table :contracts do |t|
      t.date :start
      t.date :end
      t.integer :salary_percentage, default: 100
      t.references :user, index: true
      t.references :position, index: true

      t.timestamps
    end
  end
end
