package com.zaerald.server.user;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor(staticName = "of")
public class User {

    private final String username;

    private final String email;

    private final String pictureUrl;

}
