json.extract! user_to_team, :id, :role, :user_id, :team_id, :created_at, :updated_at
json.url user_to_team_url(user_to_team, format: :json)
