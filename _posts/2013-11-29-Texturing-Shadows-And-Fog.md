---      
layout: post      
title: "Texturing Shadows And Fog [OpenGL]"      
description: "Texturing Shadows And Fog"      
category: Computer Graphics      
tags: [Computer Graphics, OpenGL]      
---      
###Finding out what version of OpenGL your graphics card support: [GLinfo2.zip](/demo/ComputerGraphics/GLinfo2.zip)           
The very first thing you need to do is determine if your video card can support GPU programming. Specifically, you are looking to see if your graphic card supports OpenGL version **4.1** or later.            
          
[>>See the Source Code<<](https://github.com/zhouhao/CS543-Computer-Graphics-Course-Project/tree/master/HW4)               
[>>Download the Executive program<<](/demo/ComputerGraphics/Texturing_Shadows_And_Fog.zip)           
      
##Behavior of program      
**Key D**: Toggle shadows ON/OFF. When ON, the shadows show up and when OFF the shadows do not show up.    
**Key A**: Toggle ON/OFF between a grass texture and stone texture. When ON, the floor is textured with grass and when OFF the floor is textured using the stone texture.    
**Key F**: Toggle between fog that changes linearly with depth and fog changing exponentially with depth    
**Key T**: Toggle reflection ON/OFF. When ON, all PLY objects are drawn with reflection. When OFF, the PLY objects are drawn with no reflection (same as you had in HW3)   
**Key V**: Toggle refraction ON/OFF. When ON, all PLY objects are drawn with refraction. When OFF, the PLY objects are drawn with no refraction (same as you had in HW3)   
**Key K**: Toggle drawing PLY files with a mixture of reflection and refraction ON/OFF. Randomly select which PLY objects to make reflective or refractive. Since this choice is randomized, every time you toggle the K **Key ON, a different set of PLY objects are reflective vs refractive. When toggled ON, all PLY objects are drawn with either reflection or refraction. When OFF, the PLY objects are drawn with no reflection or refraction (same as you had in HW3)   

##How my program works:
1). When you start it, it will display 3 trees, a car and a box without shadows        
2). Key D: Toggle shadows ON/OFF. When ON, the shadows show up and when OFF the shadows do not show up.       
3). Key A: Toggle ON/OFF between a grass texture and stone texture. When ON, the floor is textured with grass and when OFF the floor is textured using the stone texture.      
4). key F: Toggle between fog that changes linearly with depth, fog changing exponentially with depth, and no fog     
5). Key T: Toggle reflection ON/OFF. When ON, all PLY objects are drawn with reflection. When OFF, the PLY objects are drawn with no reflection    
6). Key V: Toggle refraction ON/OFF. When ON, all PLY objects are drawn with refraction. When OFF, the PLY objects are drawn with no refraction    
7). Key K: Toggle drawing PLY files with a mixture of reflection and refraction ON/OFF. Randomly select which PLY objects to make reflective or refractive. When toggled ON, all PLY objects are drawn with either reflection or refraction. When OFF, the PLY objects are drawn with no reflection or refraction      

##Attention for keyboar issues F and K:      
1). For "F", I have three status: linear fog, exponential fog, and no fog      
2). For "K", if toggled ON, when you trigger key Issue "D", "A", and "F", my program will randomly re-select reflective or refractive for all PLY objects.     

**Attention for reflection & refraction: as I do some rotation for PLY objects, so it may reflection or refraction something "weird" for you, but I think it is not wrong in my program. (Different locations have different reflection or refraction effects)**

##If you have any question, you can contact me: <a href="mailto:hzhou@wpi.edu">hzhou@wpi.edu</a>      

##Screen Shots:        
![Initial Display](/images/blog/OpenGL/hw4/1.PNG "Initial Display")            
![keyboard 'A' event](/images/blog/OpenGL/hw4/2.PNG "ground with stone")           
![keyboard 'F' event](/images/blog/OpenGL/hw4/3.PNG "linear fog")            
![keyboard 'F' event](/images/blog/OpenGL/hw4/4.PNG "exponential fog")           
![keyboard 'T' event](/images/blog/OpenGL/hw4/5.PNG "reflection in car")           
![keyboard 'V' event](/images/blog/OpenGL/hw4/6.PNG "refraction in car")     