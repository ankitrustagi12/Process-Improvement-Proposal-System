package com.soprabanking.ips.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.SliceImpl;

import com.soprabanking.ips.daos.ProposalDAO;
import com.soprabanking.ips.models.Proposal;

@SpringBootTest
public class FeedServiceTest {

    @Mock
    ProposalDAO proposalDAO;

    @InjectMocks
    FeedService feedService;

    @Test
    public void testFetchAllProposals() throws Exception {

        Proposal proposal1 = new Proposal();
        Proposal proposal2 = new Proposal();

        List<Proposal> proposals = new ArrayList<>();
        proposals.add(proposal1);
        proposals.add(proposal2);
        
        String dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";

        Date now = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
        sdf.setTimeZone(TimeZone.getTimeZone("Asia/kolkata"));

        String ds = sdf.format(now);
        
        String body = createAllFeedParams(ds, "all");

        Pageable pageable = PageRequest.of(0, 10);
        Slice<Proposal> slice = new SliceImpl<>(proposals);

        when(proposalDAO.fetchAllProposals(now, now, pageable))
                .thenReturn(slice);
        
        assertEquals(proposals, feedService.fetchAllProposals(body));
    }
    
    @Test
    public void testFetchUserProposals() throws Exception{
    	
    	Proposal proposal1 = new Proposal();
        Proposal proposal2 = new Proposal();

        List<Proposal> proposals = new ArrayList<>();
        proposals.add(proposal1);
        proposals.add(proposal2);
        
        String dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";

        Date now = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
        sdf.setTimeZone(TimeZone.getTimeZone("Asia/kolkata"));

        String ds = sdf.format(now);
        
        String body = createAllFeedParams(ds, "create");

        Pageable pageable = PageRequest.of(0, 10);
        Slice<Proposal> slice = new SliceImpl<>(proposals);

        when(proposalDAO.fetchUserProposals(1L, now, now, pageable))
                .thenReturn(slice);
        
        assertEquals(proposals, feedService.fetchUserProposals(body));
    	
    }

    public String createAllFeedParams(String ds, String str) throws JSONException {
    	
    	JSONObject json = new JSONObject();
    	json.put("startDate", ds);
    	json.put("endDate", ds);
    	json.put("page", 0);
    	json.put("size", 10);
    	
    	if(str.equals("create"))
    		json.put("userId", 1);
    	
    	return json.toString();
    	
    }

}
