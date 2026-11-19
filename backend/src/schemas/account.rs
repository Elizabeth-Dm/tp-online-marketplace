use serde::Serialize;

#[derive(Serialize)]
#[serde(rename = "camelCase")]
pub enum AccountKind {
    Admin,
    Seller,
    Byuer,
}

#[derive(Serialize)]
#[serde(rename = "camelCase")]
pub struct AccountData {
    pub user_id: i64,
    pub kind: AccountKind,

    pub first_name: &'static str,
    pub last_name: &'static str,
}
