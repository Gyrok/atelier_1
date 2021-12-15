package com.cpe.appliTest.test_bus.bus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import com.cpe.springboot.user.model.UserDTO;

@Service
public class TestBusService {
	
	 @Autowired
	 JmsTemplate jmsTemplate;
	 
	 public void sendUser(UserDTO user) {
	        System.out.println("[UserBusService] SEND String MSG=["+user+"]");
	        jmsTemplate.convertAndSend("User_Bus",user);
	    }
	 
 
}
