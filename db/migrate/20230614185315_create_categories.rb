class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :image
      t.string :title
      t.string :description
      t.string :link

      t.timestamps
    end
  end
end
