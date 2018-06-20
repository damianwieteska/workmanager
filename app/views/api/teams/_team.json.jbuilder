json.extract! team, :id, :name, :description, :durability
json.users team.users do |user|
  json.(user, :id, :first_name, :last_name)
end