class AddFieldsToUser < ActiveRecord::Migration
  def change
    add_column :users, :birthdate, :date
    add_column :users, :birth_country, :string
    add_column :users, :country, :string
    add_column :users, :city, :string
    add_column :users, :phone, :string
    add_column :users, :facebook_url, :string
    add_column :users, :linkedin_url, :string
  end
end
