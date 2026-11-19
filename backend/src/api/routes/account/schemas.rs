use serde::{Deserialize, Serialize};
use uuid::Uuid;

use crate::schemas::account::AccountData;

#[derive(Deserialize)]
#[serde(rename = "camelCase")]
pub struct AuthData {
    pub login: String,
    pub password: String,
}

#[derive(Serialize)]
#[serde(rename = "camelCase")]
pub struct SuccessAuthData {
    pub account: AccountData,
    pub access_token: Uuid,
}
