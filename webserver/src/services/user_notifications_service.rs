use chrono::NaiveTime;
use diesel::prelude::*;
use diesel::result::Error;

use crate::schema::user_notifications;
use crate::models::user_notifications::{UserNotifications, NewUserNotifications, UserNotificationsRequest};

pub fn create_user_notifications(
    conn: &mut PgConnection,
    user_id: i32,
    all_new_messages: bool,
    direct_messages: bool,
    thread_replies: bool,
    schedule: String,
    notificationHours: {
        start: NaiveTime,
        end: NaiveTime
    },
) -> Result<UserNotifications, Error> {
    let new_user_notifications = NewUserNotifications {
        user_id,
        all_new_messages,
        direct_messages,
        thread_replies,
        schedule,
        notificationHours: {
            start,
            end,
        },
    };

    let user_notifications = diesel::insert_into(user_notifications::table)
        .values(&new_user_notifications)
        .returning(UserNotifications::as_returning())
        .get_result(conn);
    log::info!("{:?}", user_notifications);
    return user_notifications;
}

pub fn get_user_notifications(conn: &mut PgConnection, user_id: i32) -> Result<UserNotifications, Error> {
    user_notifications::table
        .filter(user_notifications::user_id.eq(user_id))
        .first(conn)
}

pub fn update_user_notifications(
    conn: &mut PgConnection,
    user_id: i32,
    update_data: &UserNotificationsRequest,
) -> Result<UserNotifications, Error> {
    let new_user_notifications = diesel::update(user_notifications::table.filter(user_notifications::user_id.eq(user_id)))
        .set((
            user_notifications::all_new_messages.eq(update_data.all_new_messages.unwrap_or(true)),
            user_notifications::direct_messages.eq(update_data.direct_messages.unwrap_or(true)),
            user_notifications::thread_replies.eq(update_data.thread_replies.unwrap_or(false)),
            user_notifications::schedule.eq(update_data.schedule.as_deref().unwrap_or("Every day")),
            user_notifications::notificationHours.eq({
                NaiveTime::parse_from_str(update_data.start.as_deref().unwrap_or("09:00"), "%H:%M").unwrap_or(NaiveTime::from_hms_opt(9, 0, 0).unwrap()),
                NaiveTime::parse_from_str(update_data.end.as_deref().unwrap_or("17:00"), "%H:%M").unwrap_or(NaiveTime::from_hms_opt(17, 0, 0).unwrap()),
            }),
        ))
        .returning(UserNotifications::as_returning())
        .get_result(conn);

    match user_notifications {
        Ok(user_notifications) => Ok(user_notifications),
        Err(Error::NotFound) => {
            // If user_notifications don't exist, create new ones with default values
            create_user_notifications(
                conn,
                user_id,
                update_data.all_new_messages.unwrap_or(true),
                update_data.direct_messages.unwrap_or(true),
                update_data.thread_replies.unwrap_or(false),
                update_data.schedule.clone().unwrap_or_else(|| "Every day".to_string()),
                NaiveTime::parse_from_str(
                    update_data.start.as_deref().unwrap_or("09:00"),
                    "%H:%M"
                ).unwrap_or(NaiveTime::from_hms_opt(9, 0, 0).unwrap()),
                NaiveTime::parse_from_str(
                    update_data.end.as_deref().unwrap_or("17:00"),
                    "%H:%M"
                ).unwrap_or(NaiveTime::from_hms_opt(17, 0, 0).unwrap()),
            )
        }
        Err(e) => Err(e),
    }
}