---
title: "8x8 LED Matrix"
description: "Recently I bought an 8x8 Red LED Display for Rs. 110 ($2) from Lamington Road, Mumbai. I have connected this board to an Arduino board and an accelerometer. This display has 64 LEDs but only 16 pins…"
date: "2016-02-17T16:31:29.978Z"
categories: 
  - Arduino
  - DIY Projects

published: true
canonicalLink: http://paramaggarwal.com/post/584027833/8x8-led-matrix
---

Recently I bought an 8x8 Red LED Display for Rs. 110 ($2) from Lamington Road, Mumbai. I have connected this board to an Arduino board and an accelerometer.

![](/img/0*plcmhAmLL0uCDA3g.jpg)

This display has 64 LEDs but only 16 pins to control them. The LEDs are controlled by multiplexing them. That is each LED is refreshed one after the other like in a TV and this is done so fast that we feel like we are seeing one image. Again same as a TV or your computer CRT or TFT.

![](/img/0*ZUEYC7qc05lG8gam.jpg)

I have put up the code in a Github repository: [https://github.com/paramaggarwal/ledmatrix](http://t.umblr.com/redirect?z=https%3A%2F%2Fgithub.com%2Fparamaggarwal%2Fledmatrix&t=N2M5N2I5ZWUzYmY2NmViYjNmNjI5ZThiYTY2OTM2ZGIwYzc0MDhmMSxpSXlxUkNPSA%3D%3D)

There is a lot that can be done with the display. Here is what I could do:

Happy face:

![](/img/0*6pe3JUJ4n6esroq_.jpg)

A basic image to show on the display. This used a 2D array to store data.

![](/img/0*CGvPNzNHfyjoqGN_.jpg)

This image was generated using code. Next I moved on to patterns:

<Embed src="https://player.vimeo.com/video/5378019" aspectRatio={0.75} />

Then these two use similar code:

<Embed src="https://player.vimeo.com/video/5378084" aspectRatio={0.75} />

<Embed src="https://player.vimeo.com/video/5378112" aspectRatio={0.75} />

Now here is an interesting pattern. It shifts each columns of the image one step further, and the last colmumn becomes the first column. This gives a wavy pattern:

<Embed src="https://player.vimeo.com/video/5389019" aspectRatio={0.75} />

Here is an interesting laughing animation:

<Embed src="https://player.vimeo.com/video/5389031" aspectRatio={0.75} />

Next step was to interface the accelerometer:

![](/img/0*Bh9Bs9XbQOKCF52j.jpg)

<Embed src="https://player.vimeo.com/video/5391971" aspectRatio={0.75} />

And two games based on this:

<Embed src="https://player.vimeo.com/video/5396406" aspectRatio={0.75} />

<Embed src="https://player.vimeo.com/video/5396460" aspectRatio={0.75} />

Now comes the interesting part, I studied the net for a bouncing algorithm and this is what I could make:

<Embed src="https://player.vimeo.com/video/5404756" aspectRatio={0.75} />

Now I took this algorithm further and made a game out of it:

<Embed src="https://player.vimeo.com/video/5419056" aspectRatio={0.75} />

Finally a complete game with scores _et all_.

The game is simple, tilt the board to control the ball and break the bricks. Once you break all the bricks, it shows you the scores by drawing as many bricks as your score. The score depends on the time you took to complete the game.

Github repository: [https://github.com/paramaggarwal/ledmatrix](http://t.umblr.com/redirect?z=https%3A%2F%2Fgithub.com%2Fparamaggarwal%2Fledmatrix&t=N2M5N2I5ZWUzYmY2NmViYjNmNjI5ZThiYTY2OTM2ZGIwYzc0MDhmMSxpSXlxUkNPSA%3D%3D)

---

_Originally published at_ [_paramaggarwal.com_](http://paramaggarwal.com/post/584027833/8x8-led-matrix)_._
