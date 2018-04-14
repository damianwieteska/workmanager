# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20180414135255) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contracts", force: true do |t|
    t.date     "start"
    t.date     "end"
    t.integer  "salary_percentage", default: 100
    t.integer  "user_id"
    t.integer  "position_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "contracts", ["position_id"], name: "index_contracts_on_position_id", using: :btree
  add_index "contracts", ["user_id"], name: "index_contracts_on_user_id", using: :btree

  create_table "lists", force: true do |t|
    t.string   "name"
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "lists", ["project_id"], name: "index_lists_on_project_id", using: :btree

  create_table "positions", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.decimal  "salary",      precision: 16, scale: 2
    t.integer  "level"
    t.integer  "area"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "projects", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "visibility",  default: 0
    t.datetime "start_time"
    t.datetime "deadline"
    t.integer  "priority",    default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "skill_to_users", force: true do |t|
    t.integer  "level"
    t.integer  "user_id"
    t.integer  "skill_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "skill_to_users", ["skill_id"], name: "index_skill_to_users_on_skill_id", using: :btree
  add_index "skill_to_users", ["user_id"], name: "index_skill_to_users_on_user_id", using: :btree

  create_table "skills", force: true do |t|
    t.string   "name"
    t.integer  "kind"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "tasks", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "start_time"
    t.datetime "deadline"
    t.integer  "priority",    default: 0
    t.integer  "list_id"
    t.boolean  "done",        default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tasks", ["list_id"], name: "index_tasks_on_list_id", using: :btree

  create_table "team_to_projects", force: true do |t|
    t.integer  "team_id"
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "team_to_projects", ["project_id"], name: "index_team_to_projects_on_project_id", using: :btree
  add_index "team_to_projects", ["team_id"], name: "index_team_to_projects_on_team_id", using: :btree

  create_table "teams", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "durability"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_to_projects", force: true do |t|
    t.integer  "role"
    t.integer  "user_id"
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_to_projects", ["project_id"], name: "index_user_to_projects_on_project_id", using: :btree
  add_index "user_to_projects", ["user_id"], name: "index_user_to_projects_on_user_id", using: :btree

  create_table "user_to_teams", force: true do |t|
    t.integer  "role"
    t.integer  "user_id"
    t.integer  "team_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_to_teams", ["team_id"], name: "index_user_to_teams_on_team_id", using: :btree
  add_index "user_to_teams", ["user_id"], name: "index_user_to_teams_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.date     "birthdate"
    t.string   "birth_country"
    t.string   "country"
    t.string   "city"
    t.string   "phone"
    t.string   "facebook_url"
    t.string   "linkedin_url"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
