json.extract! user_to_project, :id, :role, :user_id, :project_id, :created_at, :updated_at
json.url user_to_project_url(user_to_project, format: :json)
