package com.kos.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pk/")
public class BotInfoController {
    @RequestMapping("botInfo/")
    public String getBotInfo(){
        return "test";
    }
}
