class Book < ActiveRecord::Base
  attr_accessible :ISBN, :author, :category, :description, :image_url, :language, :publisher, :title
end
