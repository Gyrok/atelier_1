package com.cpe.springboot.messages.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MessageModel {
	
	@Id
	@GeneratedValue
	private Integer id;
	private String senderId;
	private String receiverId;
	private String content;
	
	public MessageModel() {};
		
	public MessageModel(String senderId, String receiverId, String content) {
		this.senderId = senderId;
		this.receiverId = receiverId;
		this.content = content;
	}
	
	public String getSenderId() {
		return senderId;
	}
	public void setSenderId(String senderId) {
		this.senderId = senderId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getReceiverId() {
		return receiverId;
	}
	public void setReceiverId(String receiverId) {
		this.receiverId = receiverId;
	}

	@Override
	public String toString() {
		return "MessageModel [id=" + id + ", senderId=" + senderId + ", receiverId=" + receiverId + ", content="
				+ content + "]";
	}
}
