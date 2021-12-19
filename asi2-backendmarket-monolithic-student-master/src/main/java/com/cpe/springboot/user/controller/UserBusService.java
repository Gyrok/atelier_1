package com.cpe.springboot.user.controller;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import javax.jms.Message;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import com.cpe.springboot.common.tools.DTOMapper;
import com.cpe.springboot.user.model.FuncType;
import com.cpe.springboot.user.model.UserDTO;
import com.cpe.springboot.user.model.UserModel;
import com.cpe.springboot.user.model.UserShell;

@Service
public class UserBusService {
	
	@Autowired
	UserService userService;
	
	 @Autowired
	 JmsTemplate jmsTemplate; 

// -------------------- SEND
	 
	 //TEMPLATE
	 public void sendUser(UserDTO user) {
		UserShell uShell = new UserShell();
		uShell.setUser(user);
        System.out.println("[UserBusService] SEND String MSG=["+uShell+"]");
        jmsTemplate.convertAndSend("User_Bus",uShell);
	    }
	 
	 public void updateUser(UserDTO user) {		 
			UserShell uShell = new UserShell();
			uShell.setUser(user);
			uShell.setFunc(FuncType.UPDATE);
	        System.out.println("[UserBusService] UPDATE String MSG=["+uShell+"]");
	        jmsTemplate.convertAndSend("User_Bus",uShell);
		    }
	 
	 public void addUser(UserDTO user) {		 
			UserShell uShell = new UserShell();
			uShell.setUser(user);
			uShell.setFunc(FuncType.CREATE);
	        System.out.println("[UserBusService] UPDATE String MSG=["+uShell+"]");
	        jmsTemplate.convertAndSend("User_Bus",uShell);
		    }
	 
	 public void deleteUser(String id) {		 
		 	UserDTO user = new UserDTO();
		 	user.setId(Integer.valueOf(id));
			UserShell uShell = new UserShell();
			uShell.setUser(user);
			uShell.setFunc(FuncType.DELETE);
	        System.out.println("[UserBusService] UPDATE String MSG=["+uShell+"]");
	        jmsTemplate.convertAndSend("User_Bus",uShell);
		    }
	  
	 
// -------------------- RECEIVE
	 
 	@JmsListener(destination = "User_Bus", containerFactory = "connectionFactory")
    public void receiveMessageResult(UserShell uShell, Message message) {
 		UserDTO user = uShell.getUser();
 		if (uShell.getFunc() == FuncType.UPDATE) {
 	 		System.out.println("[UserBusService] [User_bus] RECEIVED user MSG=["+user+"]");
 	 		userService.updateUser(user);	
 		}
 		if (uShell.getFunc() == FuncType.CREATE) {
 	 		System.out.println("[UserBusService] [User_bus] RECEIVED user MSG=["+user+"]");
 	 		userService.addUser(user);	
 		}
 		if (uShell.getFunc() == FuncType.DELETE) {
 	 		System.out.println("[UserBusService] [User_bus] RECEIVED user MSG=["+user+"]");
 	 		userService.deleteUser(String.valueOf(user.getId()));;	
 		} 		
	    }
 	
 	@JmsListener(destination = "User_Bus_Custom", containerFactory = "connectionFactory")
 	public void receiveMessageCustom (String str, Message msg) {
 		String[] arr = str.split(",");
 		List<ArrayList<String>> arr2 = new ArrayList<ArrayList<String>>();
 		for (String a: arr) {
 			ArrayList<String> temp = new ArrayList<String>();
 			for (String sub:a.split(":")) {
 				temp.add(sub);
 			}
 			arr2.add(temp);
 		}
 		System.out.println("arr2 : "+arr2);
 		// getting the user 		
 		int id = Integer.valueOf(arr2.get(0).get(1));
 		float val = Integer.valueOf(arr2.get(1).get(1));
 		UserModel res = new UserModel();
 		
		for(UserModel uM: userService.getAllUsers()){
			if (uM.getId().equals(id)) {
				uM.setAccount(uM.getAccount()+val);
				uM.setCardList(new HashSet<>());
				res = uM;
			}
		}
		userService.updateUser(res);
 	}

}
