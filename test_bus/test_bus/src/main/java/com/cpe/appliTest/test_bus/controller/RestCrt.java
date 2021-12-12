package com.cpe.appliTest.test_bus.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cpe.appliTest.test_bus.bus.TestBusService;
import com.cpe.springboot.user.model.UserDTO;

@RestController
public class RestCrt {

	private final TestBusService testBusService;
	
	public RestCrt(TestBusService testBusService) {
		this.testBusService=testBusService;
	}

	
	@RequestMapping(method=RequestMethod.PUT,value="/user/{id}")
	public void updateUser(@RequestBody UserDTO user,@PathVariable String id) {
		user.setId(Integer.valueOf(id));
		testBusService.sendUser(user);
	}
}
