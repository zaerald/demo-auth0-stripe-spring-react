package com.zaerald.server.subscription;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/subscription")
public class SubscriptionController {

    @PostMapping("/subscribe")
    public ResponseEntity<String> subscribe() {
        return new ResponseEntity<>("Subscribed!", HttpStatus.OK);
    }

}
