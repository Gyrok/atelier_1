package com.cpe.springboot.messages.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cpe.springboot.messages.model.MessageModel;
import com.cpe.springboot.messages.model.MsgDTO;

@Service
public class MsgService {
	
	private final MsgRepository msgRepository;
	
	public MsgService (MsgRepository msgRepository) {
		this.msgRepository = msgRepository;
	}

	public List<MessageModel> getAllMessages() {
		List<MessageModel> msgList = new ArrayList<>();
		msgRepository.findAll().forEach(msgList::add);
		return msgList;
	}
	
	
	public void addMsg(MsgDTO msg) {
		MessageModel mM = new MessageModel(msg.senderId, msg.receiverId, msg.content);
		msgRepository.save(mM);
		}


}

