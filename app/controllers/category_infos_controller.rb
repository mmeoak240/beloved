class CategoryInfosController < ApplicationController
  def index
    render json:  CategoryInfo.all, status: :ok
    end

    def create
      category_info = CategoryInfo.create(category_info_params)
      if category_info.valid?
        render json: category_info, status: :created
      else
        render json: {errors: category_info.errors.full_messages}, status: :unprocessable_entity
      end
    end

    private

    def category_info_params
      params.permit(:id, :title, :before, :after, :description)
    end

end
