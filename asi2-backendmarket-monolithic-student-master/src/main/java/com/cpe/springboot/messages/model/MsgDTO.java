package com.cpe.springboot.messages.model;

import java.io.Serializable;

public class MsgDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 9054013529468588133L;
	public String senderId;
	public String receiverId;
	public String content;
	
	public MsgDTO(String senderId, String receiverId, String content) {
		this.receiverId = receiverId;
		this.senderId = senderId;
		this.content = content;
	}

	public String getSenderId() {
		return senderId;
	}

	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}

	public String getReceiverId() {
		return receiverId;
	}

	public void setReceiverId(String receiverId) {
		this.receiverId = receiverId;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "MsgDTO [senderId=" + senderId + ", receiverId=" + receiverId + ", content=" + content + "]";
	}

}
