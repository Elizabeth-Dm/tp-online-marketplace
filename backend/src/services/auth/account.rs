use crate::error::AuthError;
use crate::schemas::user::AccountData;
use argon2::{
    password_hash::{
        rand_core::OsRng, PasswordHash, PasswordHasher, PasswordVerifier, SaltString,
    },
    Argon2,
};
use sqlx::PgPool;

#[derive(sqlx::FromRow)]
struct AccountRow {
    id: i32,
    name: String,
    group: String,
    password_hash: String,
}

pub async fn auth_user(
    login: &str,
    password: &str,
    pool: &PgPool,
) -> Result<AccountData, AuthError> {
    let row = sqlx::query_as::<_, AccountRow>(
        r#”SELECT id, name, “group”, password_hash FROM accounts WHERE login = $1”#,
    )
    .bind(login)
    .fetch_optional(pool)
    .await
    .map_err(|_| AuthError::DatabaseError)?
    .ok_or(AuthError::LoginFailed)?;

    let hash = PasswordHash::new(&row.password_hash)
        .map_err(|_| AuthError::LoginFailed)?;

    Argon2::default()
        .verify_password(password.as_bytes(), &hash)
        .map_err(|_| AuthError::LoginFailed)?;

    Ok(AccountData {
        id: row.id,
        name: row.name,
        group: row.group,
    })
}

pub fn hash_password(password: &str) -> Result<String, AuthError> {
    let salt = SaltString::generate(&mut OsRng);
    let hash = Argon2::default()
        .hash_password(password.as_bytes(), &salt)
        .map_err(|_| AuthError::DatabaseError)?; // TODO: заменить на AuthError::HashError
    Ok(hash.to_string())
}
