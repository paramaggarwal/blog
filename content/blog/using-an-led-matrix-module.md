---
title: "Using an LED Matrix Module"
description: "Lets talk about this display first. It is a matrix of 8x8 Red LEDs with all their anodes connected together. So the anodes of each column of LED are given as 8 pins. And the cathodes of each row are…"
date: "2016-02-20T14:36:27.466Z"
categories: 
  - Arduino
  - Embedded Systems
  - DIY Projects

published: true
canonicalLink: http://paramaggarwal.com/post/35136388954/using-an-led-matrix-module
---

The [LED Matrix Module](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FFeemo-Matrix-Adapter-id-47758.html&t=OTJhNGEwODYzNDM2MGQ3MTJkY2ZiZTE3MTk5NjdlNmMzZGFiZDUzNixWZjRwYXBVeA%3D%3D) allows you to add a nice display to your project.

![](./asset-1.jpg)

Lets talk about this display first. It is a matrix of 8x8 Red LEDs with all their anodes connected together. So the anodes of each column of LED are given as 8 pins. And the cathodes of each row are given as 8 pins.

![](./asset-2.jpg)

Hence we have a total of 16 pins on this display. Now, as you might guess, a single configuration of these pins cannot uniquely assign a value to each of the 64 LEDs on the display. Hence we multiplex this information. We display column by column, and we do it so fast, that it appears as one image on the matrix to our eyes.

Now if we were to connect these 16 pins to an Arduino, that would be a lot of connections and it would leave us without any extra pins for other purposes.

![](./asset-3.jpg)

It is from this that we got the idea to fabricate our very first PCB. It consists of an IC called a Serial to Parallel Shift Register. It is a register, into which you can shift 8 bits of data serially, and these will then show up on 8 pins of the IC. Hence we use two of these for each of the set of 8 pins of the matrix.

![](./asset-4.jpg)

Once soldered it looks like this. Note the use of tiny SMD current limiting resistors. They are slightly difficult to solder, but give great space savings. All the components hide underneath the LED matrix like this:

![](./asset-5.jpg)

The display is also soldered onto the board, so that there are no loose parts.

![](./asset-6.jpg)

Hence we now have to deal with only 6 pins. The two ICs are connected serially, so to control the 16 pins of the display, we need to shift in 2 bytes every time. These pins are:

![](./asset-7.jpg)

The VCC line expects 5V supply and the GND is connected to the same on Arduino. CLK, DATA and LATCH are the lines that handle the serial transfer. At each CLK, the DATA line is read, and in this was a bit is transferred into the shift register. After sending a complete byte of 8 bits, we toggle the LATCH signal once which transfers the data in the shift register to the outputs.

![](./asset-8.jpg)

Start by connecting [jumper wires](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FJumper-Wires---Pack-of-10-id-36704.html&t=NjkyZTE3NjE0YWFmOTRkYzk5NjJiNTE4OTRiZGJiZTUzMzYwYWYwMCxWZjRwYXBVeA%3D%3D) to the display and the [Arduino Uno](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FArduino-Uno---R3-id-28855.html&t=ZmFlZDc0ZjlhOTdiZWQ3ZDEyOTYzYTQ2MWMyZTY2ZTM4MTAyYWUzNCxWZjRwYXBVeA%3D%3D).

![](./asset-9.jpg)

Connect CLK to pin 13, DATA to pin 11 and LATCH to pin 10. ENABLE is an active low pin, which means that to enable the display we need to ground this pin.

Now launch the Arduino IDE and paste the code: [Feemo Matrix Adapter Sample Code](http://t.umblr.com/redirect?z=https%3A%2F%2Fgist.github.com%2F3738207&t=OTg1NzI1MzQwNmU4M2NhODUwZmQ0ZWU3MDg0ODNhNDgxNDVkM2ZjZixWZjRwYXBVeA%3D%3D).

![](./asset-10.png)

Load the code to the Arduino and you should see a string of text scrolling on the display. Congrats!

```
byte displayBuffer[8]= {0};
```

The current configuration of the display is stored in this buffer space. It is 9 bytes (one extra byte outside the edge of the screen to fix a bug). Hence 8 of the bytes correspond to the entire screen. Each byte is one column on the display.

The real magic of the code is this part below. It takes the contents of the buffer above and _writes_ them to the display very quickly so that it appear that the whole buffer is on the matrix, even though actually it is displaying the data column by column.

```
void drawImage(byte * matrix) {

 //For each column,
 for(int i=0; i<8; i++) {

    //Send the data of the columns.
    for(int j=0; j<8; j++) { 
      digitalWrite(clockPin, LOW);
      digitalWrite(dataPin, (matrix[i]) & (1<<j) );
      digitalWrite(clockPin, HIGH);
    }

    // Select column by column.
    for(int j=7; j>=0; j--) { 
      digitalWrite(clockPin, LOW);
      digitalWrite(dataPin, (~(1<<i)) & (1<<j) );
      digitalWrite(clockPin, HIGH);
    }

    // Latch the data to the output pins of the IC.
    digitalWrite(latchPin,LOW);
    digitalWrite(latchPin,HIGH);
  } 
}
```

Hence in this way the entire buffer is drawn to screen. The rest of the code is interplay to draw the text to this buffer. It consists of a font library that specifies what each character looks like in a 8x5 matrix. Hence 5 bytes are required to denote each character.

Hence you will get an output as shown in the video below. (Video was shot when the adapter board was prototyped.)

<Embed src="https://player.vimeo.com/video/46572581" aspectRatio={0.563} />

So now quickly incorporate this amazing display into your project!

Parts used in this tutorial:

1.  [Arduino Uno](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FArduino-Uno---R3-id-28855.html&t=ZmFlZDc0ZjlhOTdiZWQ3ZDEyOTYzYTQ2MWMyZTY2ZTM4MTAyYWUzNCxWZjRwYXBVeA%3D%3D)
2.  [USB Cable](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FUSB-Cable-A-to-B--for-Arduino--id-36712.html&t=MTEzNDNlZjM0YjRkZWY4ZmNmNDQyZmE4ZDYwYmM1Mjk3ODRkMTA4OSxWZjRwYXBVeA%3D%3D)
3.  [Feemo Matrix Adapters](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FFeemo-Matrix-Adapter-id-47758.html&t=OTJhNGEwODYzNDM2MGQ3MTJkY2ZiZTE3MTk5NjdlNmMzZGFiZDUzNixWZjRwYXBVeA%3D%3D)
4.  [Jumper Wires](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.feemo.in%2Fproduct%2FJumper-Wires---Pack-of-10-id-36704.html&t=NjkyZTE3NjE0YWFmOTRkYzk5NjJiNTE4OTRiZGJiZTUzMzYwYWYwMCxWZjRwYXBVeA%3D%3D)

---

_Originally published at_ [_paramaggarwal.com_](http://paramaggarwal.com/post/35136388954/using-an-led-matrix-module)_._
