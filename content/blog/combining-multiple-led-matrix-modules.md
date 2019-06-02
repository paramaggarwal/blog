---
title: "Combining multiple LED matrix modules"
description: "This post uses a few LED Matrix Modules, that allow you to easily connect 8x8 LED Matrix displays to your Arduino. In a previous post, you saw how easy it is to connect one of these to an Arduino and…"
date: "2016-02-19T16:44:27.116Z"
categories: 
  - DIY Projects
  - Arduino
  - Electronics

published: true
canonicalLink: http://paramaggarwal.com/post/35136243259/combining-multiple-led-matrix-modules
---

This post uses a few [LED Matrix Modules](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FFeemo-Matrix-Adapter-id-47758.html&t=OWFjZWQwNDEzMjc4NTljZTkzYmM2MDg3NmEwZDRjODkxYmRhZDczMyxsSGhhTmJaMw%3D%3D), that allow you to easily connect [8x8 LED Matrix displays](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FRGB-LED-Matrix---8x8-Red--Common-Cathode--id-47751.html&t=ODIwNWNmNjU0YWZjOWQ3YTJiYjkxYmY2ZmQxNDllZDU1Njc3MzM0MixsSGhhTmJaMw%3D%3D) to your Arduino.

![](/img/0*fL9h10XARLUAGLzV.jpg)

In a [previous post](http://www.paramaggarwal.com/post/35136388954/using-an-led-matrix-module), you saw how easy it is to connect one of these to an Arduino and draw to the Matrix from a buffer.

![](/img/0*I7TnuDOLxjlBCbHR.jpg)

Now in this post we will take things further, and use _three_ LED matrices to form a long display of 24x8 which is great for displaying scrolling text.

![](/img/0*V-PjZN7l8u-oobLe.jpg)

Now each adapter has six pins. The first two are VCC (5V) and GND. Next come the CLK, DATA, LATCH and ENABLE pins. To connect three of these together, we can connect all the pins together into one pin on the Arduino except the DATA pin.

![](/img/0*eFqrLxCgVrNq5ZSa.jpg)

I used a [breadboard](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FBreadboard-id-36708.html&t=MWE2MjZiNmQ3OWQzOWViN2RlMTVlMTkxZjM5ZjJjZDRmOGY3ZTMzYSxsSGhhTmJaMw%3D%3D) with some [male header pins](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FHeader-Pins---Male-id-36706.html&t=OTA0MzI3YTEyMzk0M2VhNWQ0N2IyODllZGE5MWZkNWYxZGE1MDVjMCxsSGhhTmJaMw%3D%3D) to do this. Also, [jumper wires](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FJumper-Wires---Pack-of-10-id-36704.html&t=ZGI2OTYwZmYyYzIxM2Q4NzNlZDI0YzM4NjlhOTk0NTcyNWUwODFlZixsSGhhTmJaMw%3D%3D) work great for quickly making connections.

![](/img/0*HdA79n0dRKXci6qG.jpg)

Next, the common VCC line is connected to 5V on the Arduino, and the ENABLE and GND lines to GND pins on the Arduino.

The ENABLE line is active low, hence to enable the displays, we need to give a low of 0V on this line.

The CLK line is connected on pin 12, latch on pin 11 and the three data pins from the three displays to pin 7, 6 and 5.

![](/img/0*dlkMcr1an-lKqmoH.jpg)

Thats it, the connections are done. It’s that easy. Now to proceed to the Arduino code.

First we will start with just displaying the buffer on the 24x8 screen. The below code should work easily, if all the connections are correct.

<Embed src="https://gist.github.com/paramaggarwal/3736871.js" aspectRatio={0.357} />

Basically we initialise a 24 byte matrix with each byte corresponding to a column on the display. Then we multiplex through the columns to display the entire buffer on the displays.

![](/img/0*T3FyoJGZDIJ5d8EQ.jpg)

If you got it working, then congrats! We can quickly move to displaying text on the display now!

Have a look at this code, and try running it to get scrolling text on the displays! [Code for Scrolling Text](http://t.umblr.com/redirect?z=https%3A%2F%2Fgist.github.com%2F3736908&t=OGIxMTJhZDAwMWFiNTAyYjI2YzY0MGNiZDM3N2UxMDgzNGJmYTI3MyxsSGhhTmJaMw%3D%3D).

![](/img/0*Yq1LceGyqyt0xT83.jpg)

This is how the scrolling text looks like!

Parts used in this tutorial:

1.  [Arduino Uno](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FArduino-Uno---R3-id-28855.html&t=YTAxZTIwZDYxNTk0NGVmNDljNTEzZWU3ODY5MmU1YjBhZWU1MjQxYixsSGhhTmJaMw%3D%3D)
2.  [USB Cable](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FUSB-Cable-A-to-B--for-Arduino--id-36712.html&t=NGQ4N2JmZGNlOWI5N2QyNTNhOTA0YzUwZTdmMTZiZGJkMzMyYzcyNSxsSGhhTmJaMw%3D%3D)
3.  [Feemo Matrix Adapters](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FFeemo-Matrix-Adapter-id-47758.html&t=OWFjZWQwNDEzMjc4NTljZTkzYmM2MDg3NmEwZDRjODkxYmRhZDczMyxsSGhhTmJaMw%3D%3D)
4.  [Breadboard](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FBreadboard-id-36708.html&t=MWE2MjZiNmQ3OWQzOWViN2RlMTVlMTkxZjM5ZjJjZDRmOGY3ZTMzYSxsSGhhTmJaMw%3D%3D)
5.  [Male Header Pins](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FHeader-Pins---Male-id-36706.html&t=OTA0MzI3YTEyMzk0M2VhNWQ0N2IyODllZGE5MWZkNWYxZGE1MDVjMCxsSGhhTmJaMw%3D%3D)
6.  [Jumper Wires](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FJumper-Wires---Pack-of-10-id-36704.html&t=ZGI2OTYwZmYyYzIxM2Q4NzNlZDI0YzM4NjlhOTk0NTcyNWUwODFlZixsSGhhTmJaMw%3D%3D)

---

_Originally published at_ [_paramaggarwal.com_](http://paramaggarwal.com/post/35136243259/combining-multiple-led-matrix-modules)_._
