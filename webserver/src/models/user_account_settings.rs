use chrono::NaiveDateTime;
use diesel::prelude::*;
use serde::{Deserialize, Serialize};

use crate::schema::user_account_settings;
use crate::models::user::User;

#[derive(Queryable, Selectable, Debug, Serialize, Deserialize, Associations)]
#[diesel(belongs_to(User))]
#[diesel(table_name = user_profiles)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct UserAccountSettings {
    pub user_id: i32,
    pub full_name: String,
    pub job_title: String,
    pub email: String,
    pub department: String,
    pub phone_number: String,
    pub profile_photo_url: String,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Insertable, AsChangeset, Debug)]
#[diesel(table_name = user_profiles)]
pub struct NewUserAccountSettings<'a> {
    pub user_id: i32,
    pub full_name: &'a str,
    pub job_title: &'a str,
    pub email: &'a str,
    pub department: &'a str,
    pub phone_number: &'a str,
    pub profile_photo_url: &'a str,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UserAccountSettingsRequest {
    pub user_id: i32,
    pub full_name: String,
    pub job_title: String,
    pub email: String,
    pub department: String,
    pub phone_number: String,
    pub profile_photo_url: String,
    pub created_at: NaiveDateTime,
}