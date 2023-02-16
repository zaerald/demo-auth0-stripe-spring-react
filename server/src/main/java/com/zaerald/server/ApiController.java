package com.zaerald.server;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class ApiController {

    @GetMapping("/public")
    public Message publicEndpoint() {
        return Message.of("Public endpoint.");
    }

    @GetMapping("/private")
    public Message privateEndpoit() {
        return Message.of("Private endpoint.");
    }

}
