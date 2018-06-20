class AddConfirmableToDevise < ActiveRecord::Migration[5.2]
  def change
    change_table(:users) do |t|
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
    end
  end
end