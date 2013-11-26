---
layout: post
title: "Demo for multi-threads in Java"
description: "Demo for multi-threads in Java"
category: Java
tags: [Java, Thread]
---

I am in a course project of big data, and the first step we do is to generate test DataSet.     

We will simulate the auction process: start - enroll - item description - bid - sell - end      

It is very easy to generate with explict structure pre-defined. And the only tricky thing is that, there will be many auctions are processing at the same time, and all auctions' processing info will be put into one file. So, to achieve this, I use multi-threads to handle it, each thread represents one auction.  

<pre class="brush:java">
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;


/**
 * 
 * @Description: One auction just sell out one item now
 * @author hzhou@wpi.edu
 *
 */
public class Auction extends Thread
{

    private int auctionID;
    private int enrollID;
    private int itemID;
    private int itemPrice;
    private int timeStamp;
    private static FileWriter fw;
    
    Auction(int auctionID)
    {
    	this.auctionID = auctionID;
    	this.timeStamp = 1;
    	enrollID = 1;
        itemID = 1;
        
    	try 
    	{ 
    		fw = new FileWriter("strom.txt"); 
    	} 
    	catch (Exception e) {}
    }
    
    private void auctionBegin()
    {
    	try 
    	{ 
    		fw.write("auctionBegin " + this.timeStamp++ + " " + this.timeStamp++ +" auctionID " + this.auctionID + " nothing 0 nothing 0 nothing 0\r\n");
    	} 
    	catch (Exception e) {}
    }
    
    private void auctionEnrollment()
    {
    	int enrollCount = new Random().nextInt(2)+1;
    	
    	//System.out.println(enrollCount);
    	for(int i = 0; i &lt; enrollCount; i++)
    	{
    		int begin = timeStamp;
        	int end = timeStamp + 1;
        	timeStamp = timeStamp + 2;
    		try 
        	{
        		fw.write("enrollmentBegin " + begin + " " + end +" auctionID " + this.auctionID + " enrollID " + this.enrollID + " nothing 0 nothing 0\r\n");
        		fw.write("authAttempt " + begin + " " + end +" auctionID " + this.auctionID + " enrollID " + this.enrollID + " nothing 0 nothing 0\r\n");
        		fw.write("bidderEnrolled " + begin + " " + end +" auctionID " + this.auctionID + " enrollID " + this.enrollID + " nothing 0 nothing 0\r\n");
        	} 
        	catch (Exception e) {}
    	}
    }
    
    private void auctionItemDes()
    {
    	int timeCost = new Random().nextInt(7)+10;
    	int end = timeStamp + timeCost;
    	this.itemPrice = new Random().nextInt(20);
    	try 
    	{
    		fw.write("itemDescription " + timeStamp + " " + end +" auctionID " + this.auctionID + " nothing 0 itemID  " + this.itemID + " price "+itemPrice+"\r\n");
    	} 
    	catch (Exception e) {}
    	timeStamp = end;
    }
    
    private void auctionBid()
    {
    	int hammerBeatTimes;
    	while(true)
    	{
	    	hammerBeatTimes = new Random().nextInt() % 4;
	    	try 
	    	{
	    		itemPrice += 10;
	    		fw.write("bid " + timeStamp++ + " " + timeStamp++ +" auctionID " + this.auctionID + " nothing 0 itemID  " + this.itemID + " price "+itemPrice+"\r\n");
	    	} 
	    	catch (Exception e){}
	    	
	    	for(int i = 0; i &lt; hammerBeatTimes; i++)
	    	{
	    		try 
		    	{
		    		fw.write("hammerBeat " + timeStamp + " " + timeStamp++ +" auctionID " + this.auctionID + " nothing 0 itemID  " + this.itemID + " nothing 0\r\n");
		    	} 
		    	catch (Exception e) {}
	    	}
	    	
	    	if(hammerBeatTimes == 3)
	    	{
	    		break;

	    	}
    	}
    }

    private void auctionSellAndEnd()
    {
    	try 
    	{
    		fw.write("sell " + this.timeStamp++ + " " + this.timeStamp++ +" auctionID " + this.auctionID + " nothing 0 itemID "+ this.itemID +" nothing 0\r\n");
    		fw.write("auctionEnd " + this.timeStamp++ + " " + this.timeStamp++ +" auctionID " + this.auctionID + " nothing 0 nothing 0 nothing 0\r\n");
	    } 
		catch (Exception e) 
		{
			// do nothing here
		}
    }
    
    public void run() 
    {
    	auctionBegin();
    	auctionEnrollment();
    	auctionItemDes();
    	auctionBid();
    	auctionSellAndEnd();
    }
    
    public static void close()
    {
    	try 
    	{ 
    		 System.out.println("File is closed here!");
    		 fw.close(); 
    	} 
    	catch (Exception e) {}
    }
    public static void main(String[] args) throws InterruptedException 
    {
    	List&lt;Auction> a = new ArrayList&lt;Auction>();
    	
    	for(int i = 0; i &lt; 5; i++)
    	{
    		Auction auc = new Auction(i+1);
            a.add(auc);
    	}
    	
    	for(Auction auc: a)
    	{
    		  auc.start();
    	}
    	
    	for(Auction auc: a)
    	{
    		  auc.join();
    	}
    	//Auction daemonThread = new Auction(0);
    	//daemonThread.setDaemon(true);
    	//daemonThread.start();
    	
    	// flush and close file
    	Auction.close(); 
    }
}
</pre>

[Click to see demo result](https://github.com/zhouhao/CS525-Big-Data-Course-Project/blob/master/ProjectFinal/TestDataGenerator/strom.txt)