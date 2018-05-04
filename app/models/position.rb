class Position < ActiveRecord::Base
  has_many :contracts, dependent: :destroy
  has_many :users, through: :contracts

  enum level: [:junior, :middle, :senior]
  enum area: [:programming, :project_management, :consulting, :expert, :management]

  validates :name, :salary, :level, :area, presence: true
end
