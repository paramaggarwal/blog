---
title: 'Programming an STM32F103 board using its USB port (Blue Pill)'
description: 'The bare STM32F103 board only comes with a default USART boot loader. Even though there is a USB port on the board, you cannot use it to program it because it does not have the relevant bootloader. I…'
date: '2016-12-10T21:28:10.149Z'
categories:
  - Arduino
  - Physical Computing
  - Microcontrollers
  - Programming

published: true
canonicalLink: https://medium.com/@paramaggarwal/programming-an-stm32f103-board-using-usb-port-blue-pill-953cec0dbc86
---

## While the \$2 board is cheap and very commonly found, getting up and running is slightly convoluted. Here is a short guide on how to set it up to program directly from USB.

![A generic $2 STM32F103 board on AliExpress (aka Blue Pill)](./asset-1.jpeg)

The bare STM32F103 board only comes with a default USART boot loader. Even though there is a USB port on the board, you cannot use it to program it because it does not have the relevant bootloader.

I got my board for less than \$2 from [Advanced Tech on AliExpress](https://www.aliexpress.com/item/STM32F103C8T6-ARM-STM32-Minimum-System-Development-Board-Module-Forarduino/1748445137.html?spm=2114.13010608.0.0.lSeZxD). We need to use a simple USB to UART converter to program the board via USART with a USB boot loader, and then we can get back to programming it directly via USB.

First, connect your USB to Serial/UART/TTL Converter like this:

![([source](http://www.wifi4things.com/stm32f103c8t6-blue-pill-board-with-arduino-ide-on-linux/))](./asset-2.png)

In the image above, you see two yellow jumpers marked `BOOT0` and `BOOT1`. These specify the source of code for the micro-controller. In the default state of both being `0`, the micro-controller uses its own flash memory bootloader — which there is none right now — and which we are adding. For now, to be able to program the micro using USART, you need to set `BOOT0` as `1` and leave `BOOT1` to `0`. Basically move the first jumper and leave the second one.

Now, download the [stm32loader](https://github.com/jsnyder/stm32loader) python script and run it to see that all the necessary dependencies are satisfied. I had to `pip install pyserial` to get it to work.

Now we need the binary that we want to flash as our bootloader — we’ll use stm32duino bootloader by Roger Clark. Based on the [repo](https://github.com/rogerclarkmelbourne/STM32duino-bootloader), we need to find which pin the LED is connected to, which is pin PC13 for our board as per this [wiki](http://wiki.stm32duino.com/index.php?title=Blue_Pill). Hence we need [this file](https://github.com/rogerclarkmelbourne/STM32duino-bootloader/blob/master/binaries/generic_boot20_pc13.bin).

Once you have the file, now we simply need to run the following (after adding the correct port and file reference):

```
python ./stm32loader -p /dev/tty.SLAB_USBtoUART -w ~/Downloads/generic_boot20_pc13.bin
```

You might need to hit reset button before you run the above to get it to work. If it is successful, you should see the LED blink fast after pressing reset and then continue to blink slowly. It is signaling that no user program is found. Make sure to reset the boot setting jumpers back to default of both`0`.

![](./asset-3.jpeg)

Now we are ready to program via USB. Disconnect everything and use the USB to connect. Verify that your computer recognises the device using `dmesg` or by going to About This Mac > System Report > USB. You should see a device as Maple (The hardware and software that we get to work on above are all thanks to the excellent folks at [Maple Labs](http://www.leaflabs.com/maple).)

Now in Arduino, install the ‘Arduino Due’ hardware using the Boards Manager (search online if you are not familiar with this step). Also, download [Arduino_STM32](https://github.com/rogerclarkmelbourne/Arduino_STM32) and place in your Arduino hardware directory. See these [installation steps](https://github.com/rogerclarkmelbourne/Arduino_STM32/wiki/Installation) for more info.

Now after restarting the IDE, you should be able to select ‘Generic STM32F103C series’ in the list of boards and the STM32duino bootloader as the upload method.

Now from examples select the Blink example and modify the LED pin to be `PC13`. Now hit upload (after pressing reset on the board) and you should see console messages saying that it is uploading the code.

Now you should be able to reset the board again and see the LED blink every second. Congrats!

**Stretch Goal**: Use the exact same steps to instead flash the [Black Magic Probe](https://1bitsquared.com/products/black-magic-probe) [firmware](https://github.com/blacksphere/blackmagic) and make your own programmer capable of [running a gdb server](http://hackaday.com/2016/12/02/black-magic-probe-the-best-arm-jtag-debugger/) for debugging using breakpoints! (Update: Success! See [this article](https://medium.com/@paramaggarwal/converting-an-stm32f103-board-to-a-black-magic-probe-c013cf2cc38c).)

---

This post is based on work by [Roger Clark](https://github.com/rogerclarkmelbourne).
