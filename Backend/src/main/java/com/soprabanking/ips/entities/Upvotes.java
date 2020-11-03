package com.soprabanking.ips.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "upvotes")
public class Upvotes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonBackReference
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "proposal_id", nullable = false)
	@JsonBackReference
	private Proposal proposal;
	
	public Upvotes() {
		// TODO Auto-generated constructor stub
	}
	
	
	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	public Proposal getProposal() {
		return proposal;
	}



	public void setProposal(Proposal proposal) {
		this.proposal = proposal;
	}


	@Override
	public String toString() {
		return "Upvotes [id=" + id + ", user=" + user + ", proposal=" + proposal + "]";
	}



}
