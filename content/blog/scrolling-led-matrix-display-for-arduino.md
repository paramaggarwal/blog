---
title: "Scrolling LED Matrix Display for Arduino"
description: "Two years back, I played around with an 8x8 LED Matrix display. I connected it to an Arduino along with an accelerometer, and made a game too. Today, I came across that display, and saw that it used…"
date: "2016-02-16T13:46:07.882Z"
categories: 
  - Arduino
  - Embedded Systems
  - Display Technologies

published: true
canonicalLink: http://paramaggarwal.com/post/28266451949/scrolling-led-matrix-display-for-arduino
---

[Two years back](http://www.paramaggarwal.com/post/584027833/8x8-led-matrix), I played around with an 8x8 LED Matrix display. I connected it to an Arduino along with an accelerometer, and made [a game](http://t.umblr.com/redirect?z=https%3A%2F%2Fvimeo.com%2F5419056&t=M2UzZDU0N2Y0NTBjNDE5NThmYmUzMTA3NGJkYjE1NDMyYmQ1N2YwOCxzOFB6cTlxOQ%3D%3D) too.

It was fun.

Today, I came across that display, and saw that it used up all the pins on the Arduino. It was an 8x8 Red LED Matrix Display. Hence it had 16 pins. All of these were connected to individual pins on the Arduino, not leaving many for use.

This could be changed because of my experience with serial to parallel converters [before](http://www.paramaggarwal.com/post/584282671/in-this-circuit-three-single-digit-displays-have). I had 16 pins to control, hence I would need two such chips.

![](/img/0*6tJUSWqgsgJdC7mq.jpg)

Let me put in my video here to show what I finally built.

[Scrolling LED Matrix for Arduino](http://t.umblr.com/redirect?z=http%3A%2F%2Fvimeo.com%2F46572581&t=YTA4ZDY2NDlkNzY1ZDY3MTVhN2E0NzdhOGI1ZWViMTZiN2YwN2NlMCxzOFB6cTlxOQ%3D%3D) from [Param Aggarwal](http://t.umblr.com/redirect?z=http%3A%2F%2Fvimeo.com%2Fparamaggarwal&t=MzE4NjI2MWJkZDlmNjg3ODA5Y2FiZWY4MGI3NzFjZjg2OTk2NTcyOCxzOFB6cTlxOQ%3D%3D) on [Vimeo](http://t.umblr.com/redirect?z=http%3A%2F%2Fvimeo.com&t=MjEyODM1NTY2NzBkMzE3ZjE5ODM3YTBlNGZhNmU2ZDdlMTJiZmE1OCxzOFB6cTlxOQ%3D%3D).

I got to work putting these together on a general purpose PCB. If you decide to make your own, you will need to find out the pinout of the display as they vary. Also take a look at the [datasheet](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.nxp.com%2Fdocuments%2Fdata_sheet%2F74HC_HCT595.pdf&t=OTY5ZmRkMzlmZGJmNjZhMmJiYTI1NjRmZDJiMDZjYmVkYTg3MGUxZSxzOFB6cTlxOQ%3D%3D) for the 74HC595 IC.

![](/img/0*mygcMFG7kx5nPiRZ.jpg)![](/img/0*t_U3KlS45uqK1BYi.jpg)

When you don’t really have a proper way of working, you work like this:

![](/img/0*c5ftIP9ugziXHplA.jpg)

Once the circuit was soldered together, it was time to code. I am using an Arduino Uno with Arduino 0100 software for Mac. The code is linked to in the end.

First step was to display a simple image, in this case an upward arrow.

![](/img/0*LA2LGIV8wHlin1qV.jpg)

Also take note of how little wires are needed to control 64 LEDs! Just five.

![](/img/0*ZuAC93-s91uyR6_O.jpg)

Here is the code for Arduino on Github: [https://github.com/paramaggarwal/scrollingmatrix](http://t.umblr.com/redirect?z=https%3A%2F%2Fgithub.com%2Fparamaggarwal%2Fscrollingmatrix&t=NjY2YjI5OTU4MDQ1N2U3NzBlYmVhMGMzNGEwZWFkNDM1YmUzMzk1NyxzOFB6cTlxOQ%3D%3D)

---

_Originally published at_ [_paramaggarwal.com_](http://paramaggarwal.com/post/28266451949/scrolling-led-matrix-display-for-arduino)_._
