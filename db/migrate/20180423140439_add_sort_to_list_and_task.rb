class AddSortToListAndTask < ActiveRecord::Migration
  def change
    add_column :lists, :sort, :integer
    add_column :tasks, :sort, :integer
  end
end
