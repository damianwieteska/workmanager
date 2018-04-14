json.extract! task, :id, :name, :description, :start_time, :deadline, :priority, :list_id, :done, :created_at, :updated_at
json.url task_url(task, format: :json)
