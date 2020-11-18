package com.soprabanking.ips.controllers;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.soprabanking.ips.authentication.AuthenticationBean;
import com.soprabanking.ips.helper.UserAuth;
import com.soprabanking.ips.models.User;
import com.soprabanking.ips.services.UserControllerService;

/**
 * User Controller
 * Provides Rest-APIs for logging in through social media .
 *
 * <p>
 * This is a User Controller Class which implements social media handler(getSocialInfo rest API) and with this handler, 
 * user can access our landing page via social media(GMAIL).
 * @author kavsharma
 */
@CrossOrigin
@RestController

public class UserController
{

	private static final Logger LOGGER = LogManager.getLogger(UserController.class);
    

  
    
    @Autowired
    private ObjectMapper objectMapper;
   
    
    @Autowired
    private UserControllerService userControllerService;
    /**
   	 * This method verifies that the user exists in our database or not.
   	 * if the user already exists then it returns all the information of that user and redirects to landing page.
   	 * else user redirects to create team page for registration.
   	 * @param  userAuth the userAuth has the information of that user who logged in via social media.
   	 * @return ResponseEntity with HTTP Status .
   	 * 
   	 * */
  
    @PostMapping("/getSocialInfo")
    @ResponseBody
    public  ResponseEntity getSocialInfo(@RequestBody UserAuth userAuth)
   
    {
    	
    	LOGGER.info("Inside  UserController : getSocialInfo() method");
    	System.out.println("hiii");
    	
    	String userName=userAuth.getEmail();
    	

       
    	User user1 = userControllerService.getUserDetails(userName);
        
          if(user1==null)
           
             {
        	  

        	  LOGGER.info("Inside UserController : getSocialInfo() SUCCESS");
               
      
        	  return new ResponseEntity(userAuth,HttpStatus.NOT_FOUND);
             }
     
             else 
             {
            	 
            	        try {

            	            //ObjectMapper o = new ObjectMapper();


            	            String s = objectMapper.writeValueAsString(user1);
            	            LOGGER.info("Inside UserController : getSocialInfo() SUCCESS");
            	            return new ResponseEntity(new AuthenticationBean(s), HttpStatus.OK);
            	        	
            	     

            	        } catch (Exception e) {
            	        	LOGGER.error("Inside  UserController :getSocialInfo() FAILURE");
            	            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            	        }
            	    }

            	
             }
          
    	
        
       
    }
    

 

    
 
    

 

    
    


 


/*
 *  Team team1=this.teamRepository.getTeamByTeamName(team.getTeamname());
           User user1=this.userRepository.getUserByUserName(email);
           if(team1==null || user1==null)
           {
  
               user.setTeam(team);
            userRepository.save(user);
            team.getUser().add(user);
           // user.setPassword(passwordEncoder.encode(user.getPassword()));
           
               
            this.teamRepository.save(team);
            String response ="Hello  " + user.getName() + "  your Registration Process successfully completed";
           
               return("{message:"+response+"}") ;

 

           }
           else if(team1!=null || user==null)
           {   
               //user.setPassword(passwordEncoder.encode(user.getPassword()))
               user.setTeam(team1);
               userRepository.save(user);
               team1.getUser().add(user);
               this.teamRepository.save(team1);  
               return "Hello  " + user.getName() + "  your Registration Process successfully completed" ;

 

    
           } 
           else 
           {
               return "this is your landing Page";
           }
 */

 

/*
 * //String userName=principal.getName();
        //get the user using username 
        
        //User user=userRepository.getUserByUserName(userName);
        //String name = user.getName();
        //System.out.println("USER"+user);
        //return "!!Welcome Landing Page !!" + "\n" +"userId : " + user.getId()+ "\n" +"name : " + user.getName() + "\n" + "Email : " + user.getEmail()+ "\n" 
        //+"TeamId : " + user.getTeam().getTid() + "\n" + "Teamname : " + user.getTeam().getTeamname()  ;
        System.out.println(name);
        System.out.println(user);
        return principal;
 */
    

