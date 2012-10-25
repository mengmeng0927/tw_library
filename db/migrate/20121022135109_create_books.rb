class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :publisher
      t.string :ISBN
      t.text :description
      t.string :language
      t.string :category
      t.string :image_url

      t.timestamps
    end
  end
end
