---
layout: post
title: "Get Tweets though Twitter API v1.1"
description: "Get Tweets though Twitter API v1.1"
category: Python
tags: [Twitter API]
---
###Leave the code here first, and I will complete it this weekend
<pre>
<code>
from rauth.service import OAuth2Service # for Twitter API v1.1 https://github.com/litl/rauth/blob/master/rauth/service.py

# Get a real consumer key & secret from https://dev.twitter.com/apps/new
client_id = '2hpXXXXXXXdOo5Bw'
client_secret = 'wRtXXXXXXXXXX6Onk6oetJ9PzNalB0'
access_token_url = 'https://api.twitter.com/oauth2/token'
twitter = OAuth2Service(name='twitter',
                        client_id=client_id,
                        client_secret=client_secret,
                        access_token_url=access_token_url,
                        base_url='https://api.twitter.com/1.1/')

token = twitter.get_session().post(twitter.access_token_url,
                                   data={'grant_type': 'client_credentials'},
                                   auth=(twitter.client_id,
                                         twitter.client_secret)).json()

s = twitter.get_session(token['access_token'])

values = {}
values['screen_name'] = 'Iamzhouhao'
values['include_rts'] = 1
values['count'] = 2
data = s.get('statuses/user_timeline.json', params=values).json()

for status in data:
    print status['text'].encode('utf-8')
</code>
</pre>
