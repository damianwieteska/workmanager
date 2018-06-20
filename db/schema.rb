# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_15_142935) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contracts", id: :serial, force: :cascade do |t|
    t.date "start"
    t.date "end"
    t.integer "salary_percentage", default: 100
    t.integer "user_id"
    t.integer "position_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["position_id"], name: "index_contracts_on_position_id"
    t.index ["user_id"], name: "index_contracts_on_user_id"
  end

  create_table "lists", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255
    t.integer "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "sort"
    t.index ["project_id"], name: "index_lists_on_project_id"
  end

  create_table "positions", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255
    t.text "description"
    t.decimal "salary", precision: 16, scale: 2
    t.integer "level"
    t.integer "area"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "projects", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255
    t.text "description"
    t.integer "visibility", default: 0
    t.datetime "start_time"
    t.datetime "deadline"
    t.integer "priority", default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "skill_to_users", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.integer "skill_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["skill_id"], name: "index_skill_to_users_on_skill_id"
    t.index ["user_id"], name: "index_skill_to_users_on_user_id"
  end

  create_table "skills", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255
    t.integer "kind"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tasks", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255
    t.text "description"
    t.datetime "start_time"
    t.datetime "deadline"
    t.integer "priority", default: 0
    t.integer "list_id"
    t.boolean "done", default: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer "user_id"
    t.integer "sort"
    t.index ["list_id"], name: "index_tasks_on_list_id"
  end

  create_table "team_to_projects", id: :serial, force: :cascade do |t|
    t.integer "team_id"
    t.integer "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["project_id"], name: "index_team_to_projects_on_project_id"
    t.index ["team_id"], name: "index_team_to_projects_on_team_id"
  end

  create_table "teams", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255
    t.text "description"
    t.integer "durability"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_to_projects", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.integer "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["project_id"], name: "index_user_to_projects_on_project_id"
    t.index ["user_id"], name: "index_user_to_projects_on_user_id"
  end

  create_table "user_to_teams", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.integer "team_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["team_id"], name: "index_user_to_teams_on_team_id"
    t.index ["user_id"], name: "index_user_to_teams_on_user_id"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email", limit: 255, default: "", null: false
    t.string "encrypted_password", limit: 255, default: "", null: false
    t.string "reset_password_token", limit: 255
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "birthdate"
    t.string "birth_country", limit: 255
    t.string "country", limit: 255
    t.string "city", limit: 255
    t.string "phone", limit: 255
    t.string "facebook_url", limit: 255
    t.string "linkedin_url", limit: 255
    t.string "first_name"
    t.string "last_name"
    t.integer "role", default: 0
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.json "tokens"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
