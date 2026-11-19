use axum::Router;

use crate::app_state::AppState;

use super::routes::*;

pub fn get_api_router() -> Router<AppState> {
    Router::new().nest("/account", account::get_router())
}
