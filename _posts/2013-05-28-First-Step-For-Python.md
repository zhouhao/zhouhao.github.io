---
layout: post
title: "Python第一步"
description: "Python学习笔记"
category: 编程语言
tags: [Python]
---

    foo = 'foo'
    bar = 'bar'
    foobar = '%s%s' % (foo, bar) # It is OK
    foobar = '{0}{1}'.format(foo, bar) # It is better
    foobar = '{foo}{bar}'.format(foo=foo, bar=bar) # It is best
