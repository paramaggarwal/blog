---
title: "Start with Arduino for Just $3"
description: "The ESP is a 32-bit microcontroller compared to the 8-bit microcontroller on the Arduino, running at 80Mhz compared to 16Mhz on Arduino. Is has around 96 KB of RAM compared to 2 KB RAM on Arduino and…"
date: "2016-12-08T15:50:23.898Z"
categories: 
  - Arduino
  - IoT
  - Esp8266
  - Tutorial
  - Getting Started

published: true
canonicalLink: https://medium.com/@paramaggarwal/start-with-arduino-for-just-3-63749fea4827
---

![Practically magic.](./asset-1.png)

## Don’t use an Arduino Uno board — instead use an ESP8266 based module that is many times more capable than the Arduino, but still ten times cheaper!

The ESP is a 32-bit microcontroller compared to the 8-bit microcontroller on the Arduino, running at 80Mhz compared to 16Mhz on Arduino. Is has around 96 KB of RAM compared to 2 KB RAM on Arduino and 4 MB of flash storage for your code compared to just 32KB flash on Arduino. It has all the peripherals like SPI/I2C from the Arduino as well as plenty of input/output pins. And it still costs 10 times less than an Arduino.

_Hence I believe that the ESP is the new Arduino Uno._

To tell you how you can get started with it like me, I have a video tutorial which you can see below.

<Embed src="https://www.youtube.com/embed/hsaroVCHuPE?feature=oembed" aspectRatio={0.562} />

Supporting links and steps are as follows:

1.  Buy the WeMos D1 mini clone which is based on the ESP12 module which internally uses the ESP8266 SOC chip along with plenty of flash memory. [Buy on AliExpress](https://www.aliexpress.com/item/1pcs-D1-mini-Mini-NodeMcu-4M-bytes-Lua-WIFI-Internet-of-Things-development-board-based-ESP8266/32644199530.html).
2.  Install the [USB drivers (Mac)](https://github.com/adrianmihalko/ch340g-ch34g-ch34x-mac-os-x-driver). A quick search for USB to Serial CH340G will give you drivers for other platforms.
3.  By default the modules are programmed using Lua, based on [NodeMCU](http://www.nodemcu.com/index_en.html).
4.  Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
5.  Setup the ESP8266 board in the Arduino IDE with [these steps](https://github.com/esp8266/Arduino#installing-with-boards-manager).
6.  Install the [Blynk](http://www.blynk.cc) app and skim the [documentation](http://docs.blynk.cc).
7.  That’s it! Follow along the next steps in the video to control the LED on the board from your phone!

---

_If you enjoyed this tutorial, follow me on Medium and YouTube to know about my future projects._
