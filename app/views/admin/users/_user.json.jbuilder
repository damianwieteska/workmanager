json.extract! user, :id, :name, :description, :visibility, :start_time, :deadline, :priority, :created_at, :updated_at
json.url user_url(user, format: :json)
