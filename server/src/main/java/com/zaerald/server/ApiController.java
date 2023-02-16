package com.zaerald.server;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
// for demonstration purposes, allow origin for everything
@CrossOrigin(origins = "*")
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
