package com.cpe.springboot.user.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.*;

import com.cpe.springboot.common.tools.DTOMapper;
import com.cpe.springboot.user.model.UserDTO;
import com.cpe.springboot.user.model.UserModel;
import com.cpe.springboot.user.controller.UserService;

//ONLY FOR TEST NEED ALSO TO ALLOW CROOS ORIGIN ON WEB BROWSER SIDE
@CrossOrigin
@RestController
public class UserRestController {
	private static final Integer NO_USER_ID = -1;
	

	private final UserService userService;
	private final UserBusService userBusService;
	
	public UserRestController(UserService userService, UserBusService userBusService) {
		this.userService=userService;
		this.userBusService=userBusService;
	}
	
	@RequestMapping("/users")
	private List<UserDTO> getAllUsers() {
		List<UserDTO> uDTOList=new ArrayList<UserDTO>();
		for(UserModel uM: userService.getAllUsers()){
			uDTOList.add(DTOMapper.fromUserModelToUserDTO(uM));
		}
		return uDTOList;

	}
	
	@RequestMapping("/user/{id}")
	private UserDTO getUser(@PathVariable String id) {
		Optional<UserModel> ruser;
		ruser= userService.getUser(id);
		if(ruser.isPresent()) {
			return DTOMapper.fromUserModelToUserDTO(ruser.get());
		}
		return null;

	}
	
	@RequestMapping(method=RequestMethod.POST,value="/user")
	public void addUser(@RequestBody UserDTO user) {
		userBusService.addUser(user);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/user/{id}")
	public void updateUser(@RequestBody UserDTO user,@PathVariable String id) {
		user.setId(Integer.valueOf(id));
		//userService.updateUser(user);
		userBusService.updateUser(user);
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/user/{id}")
	public void deleteUser(@PathVariable String id) {
		userBusService.deleteUser(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/auth")
	private Integer getAllCourses(@RequestParam("login") String login, @RequestParam("pwd") String pwd) {
		 List<UserModel> uList = userService.getUserByLoginPwd(login,pwd);
		if( uList.size() > 0) {
			
			return uList.get(0).getId();
		}
		return NO_USER_ID;
	}
	

}
