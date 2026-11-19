use axum::Router;
use backend::{api, app_state::AppState};
use tokio::net::TcpListener;

#[tokio::main]
async fn main() {
    let app_state = AppState::new().await;

    let app = Router::new()
        .nest("/api", api::get_api_router())
        .with_state(app_state);

    let listener = TcpListener::bind("127.0.0.1:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
