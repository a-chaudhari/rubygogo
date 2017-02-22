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

ActiveRecord::Schema.define(version: 20170222171706) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.string   "title",                                            null: false
    t.integer  "user_id",                                          null: false
    t.integer  "goal_amount",                                      null: false
    t.string   "currency",                       default: "USD",   null: false
    t.string   "tagline"
    t.string   "campaign_card_img_url"
    t.integer  "duration",                                         null: false
    t.string   "funding_type",                                     null: false
    t.string   "video_url"
    t.string   "main_img_url"
    t.string   "overview_img_url"
    t.integer  "current_cash",                   default: 0,       null: false
    t.string   "status",                         default: "draft", null: false
    t.integer  "category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "overview_text"
    t.text     "pitch_text"
    t.datetime "start_date"
    t.datetime "end_date"
    t.string   "overview_img_file_name"
    t.string   "overview_img_content_type"
    t.integer  "overview_img_file_size"
    t.datetime "overview_img_updated_at"
    t.string   "campaign_card_img_file_name"
    t.string   "campaign_card_img_content_type"
    t.integer  "campaign_card_img_file_size"
    t.datetime "campaign_card_img_updated_at"
    t.string   "main_img_file_name"
    t.string   "main_img_content_type"
    t.integer  "main_img_file_size"
    t.datetime "main_img_updated_at"
  end

  create_table "categories", force: :cascade do |t|
    t.string   "category",      null: false
    t.string   "tagline",       null: false
    t.string   "alt_name",      null: false
    t.string   "cat_image_url", null: false
    t.string   "cat_icon",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "categories", ["category"], name: "index_categories_on_category", unique: true, using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "campaign_id", null: false
    t.integer  "parent_id"
    t.text     "body",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "contributions", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "campaign_id", null: false
    t.integer  "perk_id"
    t.integer  "amount",      null: false
    t.string   "visibility",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "other_name"
  end

  add_index "contributions", ["campaign_id"], name: "index_contributions_on_campaign_id", using: :btree
  add_index "contributions", ["user_id"], name: "index_contributions_on_user_id", using: :btree

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

  create_table "updates", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "campaign_id", null: false
    t.text     "body",        null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "updates", ["campaign_id"], name: "index_updates_on_campaign_id", using: :btree

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
