use uuid::Uuid;

pub async fn create_access_token(_user_id: i64) -> Uuid {
    let access_token = Uuid::new_v4();
    // TODO: store token with redis by {token: user_id}

    access_token
}

pub async fn get_user_id_by_access_token(_token: Uuid) -> Option<i64> {
    // TODO: try to get uid with redis by token
    let user_id = Some(1);

    user_id
}
