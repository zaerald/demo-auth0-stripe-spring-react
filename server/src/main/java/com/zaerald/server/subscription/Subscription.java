package com.zaerald.server.subscription;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Subscription {

    private final String id;

    private final String paymentStatus;

    private final String url;

}
