---
layout: post
title: "The differences between 'Interface' and 'abstract class' in Java"
description: "The differences between 'Interface'and 'abstract class' in Java"
category: Java
tags: [Java]
---
Interface & abstract class are almost the same, but after you know some details, you will find that they are totally different.   

1. In Java, we cannot do multi-inherbition from a class, so interface is a compromise for multi-inherbition, I think.   
2. In interface, there can never be members, and every function is public, all of  which should be re-written if a class implement this interface.   
3. For a real life example: chair. We know a door has two actions: OPEN, CLOSE. So we can define a abstract class as below: 
<pre class="brush:java">
abstract class Door {
		abstract void open();
		abstract void close()；
}
</pre>
Also, we can define it as interface as below:
<pre class="brush:java">
interface Door {
	void open();
	void close();
}
</pre>
Now, what if we want to add ALARM function into door? Embarrassing!   
<pre class="brush:java">
abstract class Door {
		abstract void open();
		abstract void close()；
		abstract void alarm();
}
</pre>
OR
<pre class="brush:java">
interface Door {
	void open();
	void close();
	void alarm();
}
</pre>

But the best solution will look as this:  
<pre class="brush:java">
abstract class Door {
	abstract void open();
	abstract void close()；
}
interface Alarm {
	void alarm();
}
</pre>
<pre class="brush:java">
class AlarmDoor extends Door implements Alarm {
	void open() { … }
	void close() { … }
   	void alarm() { … }
}
</pre>