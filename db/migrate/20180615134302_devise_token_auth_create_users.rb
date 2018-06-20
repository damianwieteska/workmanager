class DeviseTokenAuthCreateUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :provider, :string, default: 'email', null: false
    add_column :users, :uid, :string, default: '', null: false
    add_column :users, :tokens, :json
  end
end
