class CreateCategoryInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :category_infos do |t|
      t.string :title
      t.string :description
      t.string :before
      t.string :after

      t.timestamps
    end
  end
end
