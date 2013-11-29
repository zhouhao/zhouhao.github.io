---
layout: post
title: "Interactive Polyline Viewer 2D [OpenGL]"
description: "Interactive Polyline Viewer 2D"
category: Computer Graphics
tags: [Computer Graphics, OpenGL]
---
###Finding out what version of OpenGL your graphics card support: [GLinfo2.zip](/demo/ComputerGraphics/GLinfo2.zip)     
The very first thing you need to do is determine if your video card can support GPU programming. Specifically, you are looking to see if your graphic card supports OpenGL version **4.1** or later.      
    
[See the Source Code](https://github.com/zhouhao/CS543-Computer-Graphics-Course-Project/tree/master/HW1)         
[Download the Executive program](/demo/ComputerGraphics/Interactive_Polyline_Viewer_2D.zip)     

## How to run it:    
Event: A key is pressed:     
'p' key: (state p) Response: the program draws all polyline files provided at the top of the viewport in 10 equal-sized thumbnails (9 thumbnails of polylines above + 2 occurrences of vinci.dat) and randomly picks one to draw in large dimensions in the "main drawing window" . In the state p, if a user clicks on any of the thumbnails at the top, the corresponding polyline file in that thumbnail becomes the current drawing. The "main drawing space" is erased and the polyline in that thumbnail is redrawn to fill the entire "main drawing space".    

't' key: (state t) Response: An 6x6 tiling of all polyline files is drawn in the "main drawing space" (polyline thumbnails still at top edge). Repeatedly hitting the 't' key should create a different 6x6 tiling where the polyline picked for any tile is "random".(polyline thumbnails still at the top edge and aspect ratios are maintained within each tile)    

'e' key (state e) Response: PoliBook clears the screen and goes into drawing mode (polyline thumbnails still at the top edge). On the first click in the drawing area, a dot is drawn at wherever the user clicked. On subsequent clicks, a line is drawn from the last accepted mouse click position to the current mouse click position. Your program should be set up to accept up to 100 possible mouse clicks in one polyline. You can accept and store user-provided points in an array. If the 'b" key is held down while clicking, the current click point is NOT joined to the previous click point and instead a fresh polyline is started and drawn in addition to whatever previous polyline had been drawn. For instance, holding the "b" key down may be useful for beginning to draw the window of a house after drawing other parts. Part a) of the figure below shows how the drawing or addition of points works. The example shows a house in the process of being drawn; the user has just clicked at the position shown, and a line has been drawn from the previous point to the one designated by the mouse.     

'm' key (state m) Response: Move a previously drawn point on the current polyline. Part b) of the figure below shows this move in action. The user positions the cursor near the vertex of some polyline, presses down the mouse button, and "drags" the chosen point to some other location before releasing the button. Upon release of the button, the previous lines connected to this point are erased, and new lines are drawn to it.     

'd' key (state d) Response: Delete a point from a polyline. Part c) of the figure below shows how a point is deleted from a polyline. The user clicks near the vertex of some polyline, and the two line segments connected to that vertex are erased. Then the two other endpoints of the segments just erased are connected with a line segment.      

'g' key (state g) Response: Clear the screen and draw the gingerbread man described in class.     

esc: Response: The program terminates.     

![](/images/blog/OpenGL/polyline_drawing.jpg)     

**Note**: States (p and t) are polyline viewing states in which you can draw polyline files stored in a .dat file. States (e, m and d) are polyline drawing states. State e is the initial drawing state and states (m and d) are only accessible from state e. In the drawing states, you should be able to accept and draw new polylines onto the screen, but your program does NOT have to be able to edit the provided ones (e.g. dino.dat, usa.dat, etc). You also don't have to be able to save or write out the polyline file drawn on the screen to a file. You may choose to do that but no extra credit will be given. Make sure that reshape works for all states (p, t, e, m, d and g). i.e. if the user grabs the lower right corner of the window and increases or reduces the screen window size, whatever was drawn in it before (and thumbnails) is redrawn to the largest possible size, without distortion (i.e. always maintain correct aspect ratio for each polyline file when drawn either as thumbnails or in the main drawing window).      

##Screen Shots:  
