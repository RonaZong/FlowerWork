use actix_web::{get, put, web, HttpResponse, Responder, ResponseError};
use serde_json::json;

use crate::auth::auth_middleware;
use crate::database::db::DbPool;
use crate::database::error::DatabaseError;
use crate::handlers::error::ApiError;
use crate::models::user::UserSub;
use crate::models::user_account_settings::UserAccountSettingsRequest;
use crate::run_async_query;
use crate::services::{user_account_settings_service, user_service::get_user_id_by_email};

pub fn account_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/account-settings")
            .wrap(auth_middleware::Auth)
            .service(get_account_settings)
            .service(update_profile),
    );
}

#[get("")]
async fn get_account_settings(
    pool: web::Data<DbPool>,
    user_sub: UserSub,
) -> Result<impl Responder, impl ResponseError> {
    let profile = run_async_query!(pool, |conn| {
        let user_id = get_user_id_by_email(&user_sub.0, conn).map_err(DatabaseError::from)?;
        user_profile_service::get_user_profile(conn, user_id).map_err(DatabaseError::from)
    })?;

    Ok::<HttpResponse, ApiError>(HttpResponse::Ok().json(profile))
}

#[put("")]
async fn update_profile(
    pool: web::Data<DbPool>,
    user_sub: UserSub,
    profile_update: web::Json<UpdateUserProfileRequest>,
) -> Result<impl Responder, impl ResponseError> {
    let profile = run_async_query!(pool, |conn| {
        let user_id = get_user_id_by_email(&user_sub.0, conn).map_err(DatabaseError::from)?;
        user_profile_service::update_user_profile(conn, user_id, &profile_update)
            .map_err(DatabaseError::from)
    })?;

    Ok::<HttpResponse, ApiError>(HttpResponse::Ok().json(profile))
}