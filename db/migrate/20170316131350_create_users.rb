class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.string :password_digest
      t.string :auth_token
    end
    
    add_index :users, :email, unique: true

  end
end
