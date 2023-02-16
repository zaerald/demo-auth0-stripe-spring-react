package com.zaerald.server;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
// for demonstration purposes, allow origin for everything
@CrossOrigin(origins = "*")
public class HelloController {

   @GetMapping("/hello")
    public Message hello() {
        return Message.of("hello");
    }

}
