package com.zaerald.server;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

   @GetMapping("/hello")
    public Message hello() {
        return Message.of("hello");
    }

}
