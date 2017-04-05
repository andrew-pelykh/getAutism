class Post < ApplicationRecord

  belongs_to :user
  has_many :images

  validates :content, length: { maximum: 1000 }

end
