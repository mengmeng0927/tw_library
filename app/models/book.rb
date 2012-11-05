class Book < ActiveRecord::Base
  attr_accessible :ISBN, :author, :category, :description, :image_url, :language, :publisher, :title

  def to_json(options = {})
  	super(options.merge(:only => [:id, :title]))
  end
end
