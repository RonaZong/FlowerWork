use diesel::prelude::*;
use diesel::result::Error;

use crate::schema::user_account_settings;
use crate::models::user_account_settings::{UserAccountSettings, NewUserAccountSettings, UserAccountSettingsRequest};

pub fn create_user_account_settings(
    conn: &mut PgConnection,
    user_id: i32,
    full_name: &str,
    job_title: &str,
    email: &str,
    department: &str,
    phone_number: &str,
    profile_photo_url: &str,
) -> Result<UserAccountSettings, Error> {
    let new_user_account_settings = NewUserAccountSettings {
        user_id,
        full_name,
        job_title,
        email,
        department,
        phone_number,
        profile_photo_url,
    };

    let user_account_settings = diesel::insert_into(user_account_settings::table)
        .values(&new_user_account_settings)
        .returning(UserAccountSettings::as_returning())
        .get_result(conn);
    log::info!("{:?}", user_account_settings);
    return user_account_settings;
}

pub fn get_user_account_settings(conn: &mut PgConnection, user_id: i32) -> Result<UserAccountSettings, Error> {
    user_account_settings::table
        .filter(user_account_settings::user_id.eq(user_id))
        .first(conn)
}

pub fn update_user_account_settings(
    conn: &mut PgConnection,
    user_id: i32,
    update_data: &UserAccountSettingsRequest,
) -> Result<UserAccountSettings, Error> {
    let new_user_account_settings = diesel::update(user_account_settings::table.filter(user_account_settings::user_id.eq(user_id)))
        .set((
            user_account_settings::full_name.eq(update_data.full_name.as_deref()),
            user_account_settings::job_title.eq(update_data.job_title.as_deref()),
            user_account_settings::email.eq(update_data.email.as_deref()),
            user_account_settings::department.eq(update_data.department.as_deref()),
            user_account_settings::phone_number.eq(update_data.phone_number.as_deref()),
            user_account_settings::profile_photo_url.eq(update_data.profile_photo_url.as_deref()),
        ))
        .returning(UserAccountSettings::as_returning())
        .get_result(conn);

    match user_account_settings {
        Ok(user_account_settings) => Ok(user_account_settings),
        Err(Error::NotFound) => {
            // If user_account_settings doesn't exist, create a new one
            create_user_account_settings(
                conn,
                user_id,
                update_data.full_name.as_deref(),
                update_data.job_title.as_deref(),
                update_data.email.as_deref(),
                update_data.department.as_deref(),
                update_data.phone_number.as_deref(),
                update_data.profile_photo_url.as_deref(),
            )
        }
        Err(e) => Err(e),
    }
}