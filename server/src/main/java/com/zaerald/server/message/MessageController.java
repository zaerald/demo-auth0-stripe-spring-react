package com.zaerald.server.message;

import com.zaerald.server.Message;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/message", produces = MediaType.APPLICATION_JSON_VALUE)
public class MessageController {

    @GetMapping("/public")
    public Message publicMessage() {
        return Message.of("Public message.");
    }

    @GetMapping("/private")
    public Message privateMessage() {
        return Message.of("Private message.");
    }

}
