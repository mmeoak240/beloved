class AddSelectedToCategoryInfos < ActiveRecord::Migration[7.0]
  def change
    add_column :category_infos, :selected, :string
  end
end
