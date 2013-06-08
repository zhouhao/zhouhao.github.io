---
layout: post
title: "Python第一步"
description: "Python学习笔记"
category: 编程语言
tags: [Python]
---
### output format
    foo = 'foo'
    bar = 'bar'
    foobar = '%s%s' % (foo, bar) # It is OK
    foobar = '{0}{1}'.format(foo, bar) # It is better
    foobar = '{foo}{bar}'.format(foo=foo, bar=bar) # It is best

### Regular expression
    # encoding: UTF-8
    import re
 
    #m = re.match(r'(((f|ht){1}tp://)[-a-zA-Z0-9@:%_\+.~#?&//=]+)', 'http://sbzhouhao.net/2013/05/First-Step-For-Python/ http://sbzhouhao.net/2013/05/ hello world!')
    m = re.search(r'(((f|ht){1}tp://)[-a-zA-Z0-9@:%_\+.~#?&//=]+)', 'http://sbzhouhao.net/2013/05/First-Step-For-Python/ http://sbzhouhao.net/2013/05/ hello world!')
    
    print m.group()

