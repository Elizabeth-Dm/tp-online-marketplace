use axum::{Json, Router, http::StatusCode, response::IntoResponse, routing::post};

use crate::{
    api::routes::account::schemas::{AuthData, SuccessAuthData},
    app_state::AppState,
    services::{account::auth::auth, auth::access_token::create_access_token},
};

async fn _auth(Json(json): Json<AuthData>) -> impl IntoResponse {
    if let Some(account_data) = auth(&json.login, &json.password).await {
        let body = Json(SuccessAuthData {
            access_token: create_access_token(account_data.user_id).await,
            account: account_data,
        });
        return (StatusCode::OK, body).into_response();
    }

    (StatusCode::BAD_REQUEST, "Invalid credentials").into_response()
}

pub fn get_router() -> Router<AppState> {
    Router::new().route("/auth", post(_auth))
}
