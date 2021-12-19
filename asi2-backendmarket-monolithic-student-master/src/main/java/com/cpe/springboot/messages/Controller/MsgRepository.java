package com.cpe.springboot.messages.Controller;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cpe.springboot.messages.model.MessageModel;


public interface MsgRepository extends CrudRepository<MessageModel, Integer> {

	List<MessageModel> findBySenderId(String SenderId);
	
}
