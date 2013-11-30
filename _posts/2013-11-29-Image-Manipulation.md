---      
layout: post      
title: "Image Manipulation [OpenGL]"      
description: "Image Manipulation"      
category: Computer Graphics      
tags: [Computer Graphics, OpenGL]      
---      
###Finding out what version of OpenGL your graphics card support: [GLinfo2.zip](/demo/ComputerGraphics/GLinfo2.zip)           
The very first thing you need to do is determine if your video card can support GPU programming. Specifically, you are looking to see if your graphic card supports OpenGL version **4.1** or later.            
          
[>>See the Source Code<<](https://github.com/zhouhao/CS543-Computer-Graphics-Course-Project/tree/master/HW5)               
[>>Download the Executive program<<](/demo/ComputerGraphics/Image_Manipulation.zip)           

##How my program works(Keyboard events are case-insensitive):     
1). Key 'O': Display original picture (usain_bolt.bmp -- colorful without transformation)     
2). Key 'L': Display picture with Luminance effect (gray scale)    
3). Key 'N': Display image negative    
4). Key 'D': Display image with edge detection effect [Two versions: one is done in color, the other in luminance]     
5). Key 'E': Display image with embossing effect    
6). Key 'T': Display image with Toon rendering     
7). Key 'W': Display image with Twirl Transformation     
8). Key 'P': Display image with Ripple Transformation     
9). Key 'S': Display image with Spherical Transformation     

##Attention for keyboar issues 'D':      
1). Edge Detection in color:       If the previous keyboard event is 'O', or no previous keyboard event, then when you press 'D' or 'd', it will trigger edge detection in color      
2). Edge Detection in luminance:   Otherwise, it will trigger edge detection in luminance        

##If you have any question, you can contact me: <a href="mailto:hzhou@wpi.edu">hzhou@wpi.edu</a>      

##Screen Shots:        
![keyboard 'a' event](/images/blog/OpenGL/hw5/1.PNG "original images")            
![keyboard 'l' event](/images/blog/OpenGL/hw5/2.PNG "Luminance effect")           
![keyboard 'n' event](/images/blog/OpenGL/hw5/3.PNG "negative effect")            
![keyboard 'd' event](/images/blog/OpenGL/hw5/4.PNG "edge detection effect")           
![keyboard 'e' event](/images/blog/OpenGL/hw5/5.PNG "embossing effect")           
![keyboard 't' event](/images/blog/OpenGL/hw5/6.PNG "Toon rendering")     
![keyboard 'w' event](/images/blog/OpenGL/hw5/7.PNG "Twirl Transformation")           
![keyboard 'p' event](/images/blog/OpenGL/hw5/8.PNG "Ripple Transformation")           
![keyboard 's' event](/images/blog/OpenGL/hw5/9.PNG "Spherical Transformation")     