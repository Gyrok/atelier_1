package com.cpe.springboot.messages.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cpe.springboot.messages.model.MessageModel;
import com.cpe.springboot.messages.model.MsgDTO;

@CrossOrigin
@RestController
public class MsgRestCrt {

	private final MsgService msgService;
	
	public MsgRestCrt (MsgService msgService) {
		this.msgService = msgService;
	}
	
	@RequestMapping("/msgs")
	private List<MessageModel> getAllMsg () {
		List<MessageModel> msgList = new ArrayList<MessageModel>();
		if (!msgService.getAllMessages().isEmpty())
		{
			for(MessageModel mM:msgService.getAllMessages()){
				msgList.add(mM);
			}
		}
		
		return msgList;
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/msgs")
	public void addUser(@RequestBody MsgDTO msg) { 
		msgService.addMsg(msg);
	}
}
