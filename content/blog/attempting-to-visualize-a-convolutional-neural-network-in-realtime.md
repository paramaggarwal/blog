---
title: "Attempting to Visualize a Convolutional Neural Network in Realtime"
description: "The simulator and the python script running the neural network communicate over a websocket connection. I decided to write a small browser app that would also connect to the python script over…"
date: "2017-03-05T10:55:46.110Z"
categories: 
  - Artificial Intelligence
  - Self Driving Cars
  - Neural Networks
  - Autonomous Cars
  - Deep Learning

published: true
canonicalLink: https://towardsdatascience.com/attempting-to-visualize-a-convolutional-neural-network-in-realtime-1edd1f3d6c13
---

![](./asset-1.png)

## While replicating the End-to-End Deep Learning approach for Self- Driving Cars, I was frustrated by the lack of visibility into what the network is seeing. I built a tool to fix this.

The simulator and the python script running the neural network communicate over a websocket connection. I decided to write a small browser app that would also connect to the python script over another websocket and collect some additional data that I can visualize.

Here is what I was able to come up with:

<Embed src="https://www.youtube.com/embed/_fJkdMGLPEU?feature=oembed" aspectRatio={0.562} />

On the right we have our Udacity Simulator running. On the left is my little React app that is visualizing all the outputs of the convolutional layers in my neural network.

As you can see, it runs in realtime along with controlling the car. It was a good exercise, but I have my doubts on the usefulness of this. It is still not clear how the network is making its decisions based on these.

You can find the code here:

[**paramaggarwal/CarND-Behavioral-Cloning-P3**  
_CarND-Behavioral-Cloning-P3 - Starting files for the CarND behavioral cloning project (P3)_github.com](https://github.com/paramaggarwal/CarND-Behavioral-Cloning-P3 "https://github.com/paramaggarwal/CarND-Behavioral-Cloning-P3")[](https://github.com/paramaggarwal/CarND-Behavioral-Cloning-P3)

This article is a work in progress on the overall goal of gaining better visibility into neural networks. Let me know your thoughts in the comments on what else I could try towards this goal!
