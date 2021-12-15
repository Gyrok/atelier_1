package com.cpe.springboot.user.model;

import java.io.Serializable;

public class UserShell implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5751858787411036508L;
	private FuncType func;
	private UserDTO user;
	
	public UserShell() {}

	public FuncType getFunc() {
		return func;
	}

	public void setFunc(FuncType func) {
		this.func = func;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}
}
