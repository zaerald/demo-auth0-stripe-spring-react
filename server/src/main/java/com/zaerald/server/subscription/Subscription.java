package com.zaerald.server.subscription;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor(staticName = "of")
public class Subscription {

    private final String status;

}
