package com.zaerald.server.user;

public class UserInfoNotAvailableException extends RuntimeException {
    public UserInfoNotAvailableException() {
        super("User information is not available.");
    }
}
