json.extract! task, :id, :name, :done, :sortable_id, :description, :list_id, :sort
json.start_time formatted_date(task.start_time)
json.deadline formatted_date(task.deadline)
json.priority task.priority.humanize

if task.user
  json.user do
    json.id task.user.id
    json.first_name task.user.first_name
    json.last_name task.user.last_name
  end
end