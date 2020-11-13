package com.soprabanking.ips.modelwrap;

import com.soprabanking.ips.models.Team;

import com.soprabanking.ips.models.User;
/**
 * Model Wrap Class
 * This class wraps the object of user model and team models
 * @author kavsharma
 */

public class ModelWrap {

    private User user;
    private Team team;


    public User getUser() {
        return user;
    }


    public void setUser(User user) {
        this.user = user;
    }


    public Team getTeam() {
        return team;
    }


    public void setTeam(Team team) {
        this.team = team;
    }


    public ModelWrap() {
        super();
        // TODO Auto-generated constructor stub
    }


}
