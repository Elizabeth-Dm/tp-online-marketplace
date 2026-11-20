use actix_web::{
    error,
    http::{header::ContentType, StatusCode},
    HttpResponse,
};
use derive_more::derive::{Display, Error};

pub enum AuthError {
    #[display("incorrect login or password")]
    LoginFailed,

    #[display("database error")]
    DatabaseError,
}

impl error::ResponseError for AuthError {
    fn error_response(&self) -> HttpResponse {
        HttpResponse::build(self.status_code())
            .insert_header(ContentType::html())
            .body(self.to_string())
    }

    fn status_code(&self) -> StatusCode {
        match *self {
            AuthError::LoginFailed => StatusCode::UNAUTHORIZED,
            AuthError::DatabaseError => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}
