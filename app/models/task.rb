class Task < ActiveRecord::Base
  include RailsSortable::Model

  set_sortable :sort

  belongs_to :list
  belongs_to :user

  delegate :project, to: :list

  enum priority: [:very_low, :low, :normal, :important, :critical]

  validates :name, :priority, :list, presence: true
end
