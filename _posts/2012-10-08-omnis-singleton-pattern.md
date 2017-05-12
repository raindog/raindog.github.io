--- 
layout: post
title: Singleton pattern in Omnis Studio
tags: 
- omnis
- development
description: A quick and dirty implementation of the singleton pattern in omnis studio.
---

Here there is the code implementing the singleton pattern as specified by the [Gang of Four](https://en.wikipedia.org/wiki/Singleton_pattern) written in Omnis Studio, a programming language I use at my current employer. Note that the object name is passed as parameter on the _pObjName_ variable.

{% highlight code%}
    If $clib.$objects.[pObjName].$insts.$count=0
      Do $clib.$objects.[pObjName].$newref() Returns object_reference
    Else     ;; return the one and only object instance
      Calculate row as $clib.$objects.[pObjName].$listrefs()
      Calculate object_reference as row.C1
    End If

    Quit method pick(object_reference.$validref(), #NULL, object_reference)
{% endhighlight %}
Enjoy it!
