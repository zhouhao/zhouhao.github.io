---
layout: post
title: "Parse HTML by Python"
description: "Parse HTML by Python"
category: Python
tags: [Python, html]
---

###Use BeautifulSoup to Parse Chemicalbook website

1. Read cas number from a txt file(one record one line)    
2. Get the web information of the product for that cas number     
3. Store the information into a CVS file     


####This is the first time I try to parse the html source code. So it is coarse.   
<pre>
<code>
#!/usr/bin/python
# -*- coding: utf-8 -*-

#---------------------------------import---------------------------------------
import urllib2
import re
import time
import codecs
from BeautifulSoup import BeautifulSoup

#------------------------------------------------------------------------------

# remove &lt;a&gt;, &lt;b&gt; from string
def filter_tags(htmlstr):
    re_h=re.compile('</?[ab]+[^>]*>')
    s=re_h.sub('',htmlstr) 
    return s

def get_record(casno):
    casno_format=casno[0:-1].replace(' ','') # format casno, remove '\n' at the end, maybe it will be change in different machine 
    #print casno_format
    userMainUrl = "http://www.chemicalbook.com/CASEN_"+casno_format+".htm" 
    #userMainUrl = "http://www.chemicalbook.com/CASEN_1904-98-9.htm"
    
    print userMainUrl
    try:
      req = urllib2.Request(userMainUrl)
	    resp = urllib2.urlopen(req)
	    respHtml = resp.read() # get the html info of the whole page


	    if respHtml:
	        songtasteHtmlEncoding = "utf-8"
	        soup = BeautifulSoup(respHtml, fromEncoding=songtasteHtmlEncoding)
	        foundClassH1user = soup.find(attrs={"id":"_ctl0_ContentPlaceHolder1_SubClass"})
	        info_dict={}
	        name_list=["name","cas","synonyms", "molecular formula", "mdl number", "molecular weight", "density", "mp", "bp", "fp", "storage temp.", "brn", "hazard codes", "risk statements", "safety statements","rtecs"]
	        for item in name_list: # dict initialization
		        info_dict[item] = "NULL"

	        #print info_dict
	        for incident in foundClassH1user('td', colspan="2"):
	            font = incident.find('font')
	            name = font.string[1:-1].replace('&nbsp;','').lower()
	            info_dict[name] = filter_tags(str(incident.contents[3]).replace('&#186;','').decode('utf8'))

	        output_str = ''       
	        for item in name_list: 
	        	if item == 'rtecs':
	        		output_str +="\""+ info_dict[item] + "\"\n"
		        else:
			        output_str +="\""+ info_dict[item] + "\","

		print output_str
		return output_str, info_dict['cas']

    except:
		return "NULL", "NULL"

    
        
def main():
    casno = open("cas.txt", "r")
    date = str(time.strftime('%Y_%m_%d',time.localtime(time.time())))
    output =codecs.open(date+'.csv', 'w+', encoding='utf-8')
    index=0
    for line in casno:  
        index = index + 1
        output_str, cas = get_record(line)
        if(cas == "NULL"):
	        continue
        else:
	        output.write(output_str)
        if (index > 10000):
            break 
            
###############################################################################
if __name__=="__main__":
    main()
</code>
</pre>
