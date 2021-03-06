---
title: "Nokia 3310 Display"
description: "We get a 84x48 monochrome graphic LCD for almost nothing (around 100 Rs). It is easily available at Lamington Road or at any friendly mobile repair shop. Now, the pins at the back of the LCD are…"
date: "2016-02-17T16:25:17.152Z"
categories: 
  - Hacking
  - DIY Projects
  - Electronics

published: true
canonicalLink: http://paramaggarwal.com/post/583987692/nokia-3310-display
---

The Nokia 3310 was an immensely popular phone, and now we reap the benefits…

We get a 84x48 monochrome graphic LCD for almost nothing (around 100 Rs). It is easily available at Lamington Road or at any friendly mobile repair shop.

![](/img/0*nKPqcSEC-EDUGTjk.jpg)

I used the 8051 iBoard available at triindia.co.in to control it:

![](/img/0*4PmkkFIMKgsAw9ta.jpg)

The pinout of the Nokia 3310 Display is as follows:

![](/img/0*3u1ruZo73j0qrwCm.jpg)

Nokia 3310 LCD Pinouts:

-   VCC — Power Supply (5V)
-   SCK — Serial Clock
-   SDI — Serial Data In
-   DC — Data/Command
-   CE — Chip Enable
-   GND — Ground
-   Vout — Contrast
-   RES — Reset Pin

Now, the pins at the back of the LCD are quite close, so carefully solder 7 wires to the back of the display, leaving out Vout. After this we will connect the display on to the board:

I used the following:

-   P1\_1 — SCK
-   P1\_2 — D/C
-   P1\_3 — RST
-   P1\_4 — DATA
-   P1\_5 — CE

Nokia 3310 Display Code — [http://github.com/paramaggarwal/greyscreen](http://t.umblr.com/redirect?z=http%3A%2F%2Fgithub.com%2Fparamaggarwal%2Fgreyscreen&t=OWMxZjYzNGQ0MDAwZDMxMjJkODAxMDc5YzQ1MmIxNDFiYjIzOWY1NSxCWkg0NkhHZQ%3D%3D)

![](/img/0*DGlilLXfwH100qmq.jpg)

Thats it, we are done. Now burn the code on to the board.

This project was done during my internship at robo.in a division of TRI Technosolutions now [Thinklabs](http://t.umblr.com/redirect?z=http%3A%2F%2Fthinklabs.in&t=ZGU0Njk3MThmZDE3ZjA5NDZjZDljYTQwMzFkZWFjMTdmY2JkZTRiMyxCWkg0NkhHZQ%3D%3D). It is a start-up that takes robotics workshops for school and engineering kids.

Below is the screen showing an image “TRI”.

![](/img/0*nEyy-Q7_IUg6upZV.jpg)

Similarly using a software called FastLCD, I managed the following:

![](/img/0*vjYejnrKNpSzydxz.jpg)![](/img/0*UGF5e1s9AyrfQSDU.jpg)

---

_Originally published at_ [_paramaggarwal.com_](http://paramaggarwal.com/post/583987692/nokia-3310-display)_._
