---
title: "Scrolling Tweets — A tiny display for the latest news."
description: "Yesterday, I finished up building a little module controlled with just 5 wires to display any scrolling text on a matrix display of 64 LEDs. Today, it was time to take it to the next step. Getting…"
date: "2016-02-17T16:19:51.791Z"
categories: 
  - Arduino
  - Embedded Systems
  - DIY Projects

published: true
canonicalLink: http://paramaggarwal.com/post/28330849923/scrolling-tweets-a-tiny-display-for-the-latest
---

Yesterday, I finished up building a little module controlled with just 5 wires to display any scrolling text on a matrix display of 64 LEDs.

<Embed src="https://player.vimeo.com/video/46611743" aspectRatio={0.563} />

Today, it was time to take it to the next step. Getting realtime tweets from my favorite site The Verge and displaying them.

![](/img/0*usi99YIG5FU-Dvaq.jpg)

For this, I needed:

[WiFly Shield](http://t.umblr.com/redirect?z=https%3A%2F%2Fwww.sparkfun.com%2Fproducts%2F9954&t=MDY4NjQyOWIzMzlkYmIzNzRlNzEzM2U4ZDk5N2U3NjdkODAwZjQwZCx1Z1ViMG9LaA%3D%3D) from Sparkfun — This little shield helps the Arduino connect straight to the internet via WiFi. No wires.

[LiPower Shield](http://t.umblr.com/redirect?z=https%3A%2F%2Fwww.sparkfun.com%2Fproducts%2F10711&t=OTQ4MWE3MGYwYTNhZjllZTRhZTA0MmY1MjY5NzUyZDRjNzgyOTU5Yix1Z1ViMG9LaA%3D%3D) from Sparkfun — Another shield stacked on to take power from a LiPoly battery and keep the whole device completely wireless.

![](/img/0*fvGxVsQhJ1QDGnJg.jpg)

In addition there was the trusty [Arduino Uno](http://t.umblr.com/redirect?z=http%3A%2F%2Farduino.cc%2Fen%2FMain%2FArduinoBoardUno%2F&t=YzQzODRhODYzNWFmZjQ1NzVkZDliZjAxOTQ5OWYyOWM4YWJmZDcyNSx1Z1ViMG9LaA%3D%3D) and a little speaker to beep when new tweets are going to be displayed.

There is quite a mess of wires now.

![](/img/0*p_By49GukCK1SyjK.jpg)

In the process of building it, I also had to build a [tiny application](http://t.umblr.com/redirect?z=http%3A%2F%2Fsimpletwitter.herokuapp.com&t=ZWU1ZTBkODk2YWYxN2ZjMzMzN2RiODhhODRlNzY1Mjc2NTQ2M2ZhNix1Z1ViMG9LaA%3D%3D) which I hosted on Heroku. It’s job is to call the Twitter API and parse the reply into a tiny package which the Arduino can then understand.

Here is the full code on Github: [https://github.com/paramaggarwal/scrollingtweets](http://t.umblr.com/redirect?z=https%3A%2F%2Fgithub.com%2Fparamaggarwal%2Fscrollingtweets&t=OGQ1MTIxMmY3YjU3MGQ1Y2E5MmVkNmQwYzdiNGM1ODQzOGRmNTRiNCx1Z1ViMG9LaA%3D%3D)

---

_Originally published at_ [_paramaggarwal.com_](http://paramaggarwal.com/post/28330849923/scrolling-tweets-a-tiny-display-for-the-latest)_._
