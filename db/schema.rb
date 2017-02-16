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

ActiveRecord::Schema.define(version: 20170216201341) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.string   "title",                                   null: false
    t.integer  "user_id",                                 null: false
    t.integer  "goal_amount",                             null: false
    t.string   "currency",              default: "USD",   null: false
    t.string   "tagline"
    t.string   "campaign_card_img_url"
    t.integer  "duration",                                null: false
    t.string   "funding_type",                            null: false
    t.string   "video_url"
    t.string   "main_img_url"
    t.string   "overview_img_url"
    t.integer  "current_cash",          default: 0,       null: false
    t.string   "status",                default: "draft", null: false
    t.integer  "category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "overview_text"
    t.text     "pitch_text"
  end

  create_table "perks", force: :cascade do |t|
    t.string   "title",                      null: false
    t.text     "description",                null: false
    t.integer  "campaign_id",                null: false
    t.integer  "price",                      null: false
    t.integer  "number_claimed", default: 0, null: false
    t.integer  "total_number",               null: false
    t.string   "eta"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "perks", ["campaign_id"], name: "index_perks_on_campaign_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "firstName",       null: false
    t.string   "lastName",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "avatar_img_url"
    t.string   "address"
    t.string   "city"
    t.integer  "postal_code"
    t.text     "short_desc"
    t.text     "about_me"
    t.string   "profile_img_url"
    t.string   "country"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
