json.extract! skill_to_user, :id, :level, :user_id, :skill_id, :created_at, :updated_at
json.url skill_to_user_url(skill_to_user, format: :json)
