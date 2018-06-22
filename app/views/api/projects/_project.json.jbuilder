json.extract! project, :id, :name, :description, :priority
json.start_time formatted_date(project.start_time)
json.deadline formatted_date(project.deadline)
json.priority project.priority.humanize

json.teams project.teams, partial: 'api/teams/team', as: :team

json.users project.users do |user|
  json.(user, :id, :first_name, :last_name)
  json.positions user.positions do |position|
    json.name "#{position.name} - #{position.level.humanize} #{position.area.humanize}"
  end
end
