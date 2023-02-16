package com.zaerald.server.subscription;

public class SubscriptionSessionCreationException extends RuntimeException {
    public SubscriptionSessionCreationException() {
        super("There was an error in creating a payment session");
    }

}
