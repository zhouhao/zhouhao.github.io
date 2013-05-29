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
 
    m = re.match(r'(((f|ht){1}tp://)[-a-zA-Z0-9@:%_\+.~#?&//=]+)', 'http://www.desteps.com/program/php/0100501.html http://www.desteps.com/program/ph1p/0100501.html hello world!')
    print m.group(0)
    print m.group(1)
