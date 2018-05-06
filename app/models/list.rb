class List < ActiveRecord::Base
  include RailsSortable::Model
  set_sortable :sort

  belongs_to :project
  has_many :tasks, -> { order :sort }, dependent: :destroy

  validates :name, :project, presence: true
end
