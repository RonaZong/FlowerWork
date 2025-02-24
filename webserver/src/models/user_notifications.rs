use chrono::{NaiveDateTime, NaiveTime};
use diesel::prelude::*;
use serde::{Deserialize, Serialize};

use crate::schema::user_notifications;
use crate::models::user::User;

#[derive(Queryable, Selectable, Debug, Serialize, Deserialize, Associations)]
#[diesel(belongs_to(User))]
#[diesel(table_name = user_notifications)]
#[diesel(check_for_backend(diesel::pg::Pg))]
pub struct UserNotifications {
    pub user_id: i32,
    pub all_new_messages: bool,
    pub direct_messages: bool,
    pub thread_replies: bool,
    pub schedule: String,
    pub notificationHours: {
        pub start: NaiveTime,
        pub end: NaiveTime
    },
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}

#[derive(Insertable, AsChangeset, Debug)]
#[diesel(table_name = user_notifications)]
pub struct NewUserNotifications {
    pub user_id: i32,
    pub all_new_messages: bool,
    pub direct_messages: bool,
    pub thread_replies: bool,
    pub schedule: String,
    pub notificationHours: {
        pub start: NaiveTime,
        pub end: NaiveTime
    },
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UserNotificationsRequest {
    pub user_id: i32,
    pub all_new_messages: bool,
    pub direct_messages: bool,
    pub thread_replies: bool,
    pub schedule: String,
    pub notificationHours: {
        pub start: NaiveTime,
        pub end: NaiveTime
    },
}