use crate::error::AuthError;
use crate::schemas::user::AccountData;
use sqlx::PgPool;

//TODO: add hash password
pub async fn auth_user(
    login: &str,
    password: &str,
    pool: &PgPool,
) -> Result<AccountData, AuthError> {
    let row =
        sqlx::query_as::<_, AccountData>("SELECT id, name, "group", password_hash FROM accounts WHERE login = $1")
            .bind(login)
            .fetch_optional(pool)
            .await
            .map_err(|_| AuthError::DatabaseError)?
            .ok_or(AuthError::LoginFailed)?;

    Ok(row)
}
