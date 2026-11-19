use crate::schemas::account::{AccountData, AccountKind};

impl AccountData {
    /// Make instance from db row.
    pub fn from_row() -> Self {
        Self {
            user_id: 1,
            kind: AccountKind::Admin,
            first_name: "Admin",
            last_name: "User",
        }
    }
}

pub async fn auth<'a>(login: &'a str, password: &'a str) -> Option<AccountData> {
    if login == "1" && password == "1" {
        return AccountData::from_row().into();
    }

    None
}
