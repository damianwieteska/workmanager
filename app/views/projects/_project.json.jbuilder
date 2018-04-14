json.extract! project, :id, :name, :description, :visibility, :start_time, :deadline, :priority, :created_at, :updated_at
json.url project_url(project, format: :json)
