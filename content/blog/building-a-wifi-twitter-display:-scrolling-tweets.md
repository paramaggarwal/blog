---
title: "Building a WiFi Twitter Display: Scrolling Tweets"
description: "In the previous post — Combining multiple LED matrix modules we explored the use of three LED matrix displays to show scrolling text. But the text was pre-programmed in the code, and hence was not of…"
date: "2016-02-20T15:06:08.646Z"
categories: 
  - DIY Projects
  - Arduino
  - Internet of Things

published: true
canonicalLink: http://paramaggarwal.com/post/35136311465/building-a-wifi-twitter-display-scrolling-tweets
---

In the previous post — [Combining multiple LED matrix modules](http://www.paramaggarwal.com/post/35136243259/combining-multiple-led-matrix-modules) we explored the use of three LED matrix displays to show scrolling text.

But the text was pre-programmed in the code, and hence was not of much utility. By connecting the device to the internet, we can get interesting and meaningful content to display on the device. For this purpose, I connected a [Sparkfun WiFly Shield](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FWiFly-Shield-id-28907.html&t=Zjc4OTA0MGE5Nzk1MThjNjQ5Yzk5MzgwZmYzZGI2ZmQ1ZTIyZjczNCxzZDZIWGNyNg%3D%3D) on top of the Arduino Uno.

![](/img/0*uDwehSBsKPiX0ckJ.jpg)

This simple shield allows connectivity to the internet using WiFi. Let us first test the WiFi Shield to learn how to use it.

<Embed src="https://gist.github.com/paramaggarwal/3737474.js" aspectRatio={0.357} />

The above code is the sample code that uses the [WiFly Library](http://t.umblr.com/redirect?z=https%3A%2F%2Fgithub.com%2Fsparkfun%2FWiFly-Shield&t=MzA3ZDg3OGM4ZDQzYWJlMjNkMzI1YTNlOTBjY2EwNjM5NTQ0NjBlMCxzZDZIWGNyNg%3D%3D) to connect to Google’s Homepage and return the raw HTML in the Arduino Terminal.

Once you get it working, try fiddling with it to understand how it works.

Now to read data from a Twitter account, we need to use the [Twitter API](http://t.umblr.com/redirect?z=https%3A%2F%2Fdev.twitter.com%2Fdocs%2Fapi%2F1.1%2Fget%2Fstatuses%2Fuser_timeline&t=NmU2ODJkNGU2ZWRlNDRmMGM5NTI3MzY2MzI0ZDc1MWY2MDg1MmVjZCxzZDZIWGNyNg%3D%3D). To do this, we write a simple [Node.js](http://t.umblr.com/redirect?z=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNode.js&t=Y2YyMWU2ZmEwNzVmNTQwNTNhNWM4Yzk4ZTM1YTc1YjE0ZmNmZDc2YSxzZDZIWGNyNg%3D%3D) application, and host it somewhere like [Heroku](http://t.umblr.com/redirect?z=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHeroku&t=N2JlZDE2OGQzZWQxNTczMmQzNGFiMWY5NDdmMjhiZTYzOGRlYmM0ZSxzZDZIWGNyNg%3D%3D).

The URL we call is

```
http://api.twitter.com/statuses/user_timeline.json?screen_name=verge&count=5;&trim_user=1
```

Here we are telling the API, to return the last five tweets of the user _@verge_ and trim extra information. The response is in [JSON format](http://t.umblr.com/redirect?z=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJSON&t=MTBlZDM2MWI2YjMxNDg0NzlmNzRlMTlhYzVhOGRjMDljNGNiNjExMCxzZDZIWGNyNg%3D%3D). To extract it, we need to do some string manipulation on the code.

Here is the Node.js code running on Heroku: [Node.js code snippet on Github](http://t.umblr.com/redirect?z=https%3A%2F%2Fgist.github.com%2F3206393&t=MjliYWFjNzEwOWFiMDM3ZmFmZTU3ZmM5ZTdmYzA4OGZmYmQzMDU2MCxzZDZIWGNyNg%3D%3D) and the result is the following: [simpletwitter.herokuapp.com](http://t.umblr.com/redirect?z=http%3A%2F%2Fsimpletwitter.herokuapp.com&t=OWZhMzliNzM5MWE5YWZmZGNhNDk1NWY3YmE2M2FjYTVhMDEwYWViNSxzZDZIWGNyNg%3D%3D)

As you can see, we take the complex JSON response from Twitter, and parse it into a simple list of five strings. To see the real Twitter JSON response, use the command line utility [curl](http://t.umblr.com/redirect?z=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCURL&t=NmFkZGFlZTMxZDA2YmIzMzY0NmQ3M2M5MjRiNWZkZjNlYWJlOWVhZCxzZDZIWGNyNg%3D%3D).

Now that we have a webpage that can give us text to display, we connect to this Heroku app using the WiFi Shield, and scrape out five strings. Then its really easy to just send these strings to the display like in the previous code.

The combination of three LED matrix displays give us 24x8 LEDs bringing the total LED count to 192. Yes we are controlling 192 LEDs using just one Arduino!

The buffer that stores this is:

```
byte displayBuffer[24]= {0};
```

which is a simple buffer of size 25 bytes. Each byte is 8 bits, and each bit corresponds to one column of 8 LEDs on the displays.

Here is the entire code for this setup:  
[Scrolling Tweets using multiple LED matrix displays code on Github](http://t.umblr.com/redirect?z=https%3A%2F%2Fgist.github.com%2F3737606&t=YjFjMTk5Y2I3ZWJhOTlkMDMzNGE2OGUyNTc4ZWVlNDFkN2ZiZDIzYixzZDZIWGNyNg%3D%3D)

Finally we get this:

<Embed src="https://player.vimeo.com/video/49606294" aspectRatio={0.563} />

Finally to make the project completely wireless, we use a [Sparkfun LiPower Shield](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FSparkfun-LiPower-Shield-id-28908.html&t=NTVjYTgzYjdiMjBiMjhjMGU4MWE3MWRiMDk3YjhmNDRlMTU2YWUxMyxzZDZIWGNyNg%3D%3D) and accompanying [LiPoly battery](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FPolymer-Lithium-Ion-Battery---1000mAh-id-48189.html&t=MDBhYWRlZDUyYjVjYzkxODQ5NDk2MTk4OTlkY2E5NWY1ZTQ5ZWIwNixzZDZIWGNyNg%3D%3D).

Congrats on building a network connected device of the future!

Parts used in this tutorial:

1.  [Arduino Uno](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FArduino-Uno---R3-id-28855.html&t=MGEzZjI4YjM3Zjk4ZTZlNWE3NjI0M2NmNWMxODUxOGM4ZTNjY2I3YSxzZDZIWGNyNg%3D%3D)
2.  [USB Cable](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FUSB-Cable-A-to-B--for-Arduino--id-36712.html&t=MjljZGIwMjhjMDE2NDY0MWE0N2FkMTliNzEzYjg1MjBkOWZiYWNhYSxzZDZIWGNyNg%3D%3D)
3.  [Feemo Matrix Adapters](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FFeemo-Matrix-Adapter-id-47758.html&t=NmRmZTRjODg2ZDcxN2E5MjcyZDBjZDJlMzNhZDM5MTMzNTE1YzY2MixzZDZIWGNyNg%3D%3D)
4.  [Breadboard](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FBreadboard-id-36708.html&t=MTJlNDA3MWU1ZWIzODRjYWRkNzczOWEzNTliMzExMjg3MjkxMzYyMyxzZDZIWGNyNg%3D%3D)
5.  [Male Header Pins](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FHeader-Pins---Male-id-36706.html&t=YzhmMDhjMzk2NGUwOGJjNzkyZTZhY2VlOGRlZWEwMjFlZDFiOTZhYSxzZDZIWGNyNg%3D%3D)
6.  [Jumper Wires](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FJumper-Wires---Pack-of-10-id-36704.html&t=MmJiZGExYTYyODQ3M2M1NmM4NDQ3Y2U1YzEwYTI2NjEwOThlYzkxYSxzZDZIWGNyNg%3D%3D)
7.  [Sparkfun WiFly Shield](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FWiFly-Shield-id-28907.html&t=Zjc4OTA0MGE5Nzk1MThjNjQ5Yzk5MzgwZmYzZGI2ZmQ1ZTIyZjczNCxzZDZIWGNyNg%3D%3D)
8.  [Sparkfun LiPower Shield](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FSparkfun-LiPower-Shield-id-28908.html&t=NTVjYTgzYjdiMjBiMjhjMGU4MWE3MWRiMDk3YjhmNDRlMTU2YWUxMyxzZDZIWGNyNg%3D%3D)
9.  [LiPoly battery](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FPolymer-Lithium-Ion-Battery---1000mAh-id-48189.html&t=MDBhYWRlZDUyYjVjYzkxODQ5NDk2MTk4OTlkY2E5NWY1ZTQ5ZWIwNixzZDZIWGNyNg%3D%3D)

---

_Originally published at_ [_paramaggarwal.com_](http://paramaggarwal.com/post/35136311465/building-a-wifi-twitter-display-scrolling-tweets)_._
