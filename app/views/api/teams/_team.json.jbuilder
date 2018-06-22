json.extract! team, :id, :name, :description, :durability
json.users team.users do |user|
  json.(user, :id, :first_name, :last_name)
  json.positions user.positions do |position|
    json.name "#{position.name} - #{position.level.humanize} #{position.area.humanize}"
  end
end