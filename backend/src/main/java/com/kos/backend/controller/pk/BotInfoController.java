package com.kos.backend.controller.pk;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/pk/")
public class BotInfoController {
    @RequestMapping("botInfo/")
    public List getBotInfo(){
        List<Map<String,String>> list = new ArrayList();
        Map<String,String> bot1 = new HashMap<>();
        bot1.put("name","snake1");
        bot1.put("rank","1500");
        Map<String,String> bot2 = new HashMap<>();
        bot2.put("name","dog");
        bot2.put("rank","648");
        list.add(bot1);
        list.add(bot2);
        return list;
    }
}
