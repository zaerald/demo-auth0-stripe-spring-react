package com.zaerald.server.subscription;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/subscription")
public class SubscriptionController {

    @PostMapping("/subscribe")
    public Subscription subscribe() {
        return Subscription.of("Success!");
    }

}
