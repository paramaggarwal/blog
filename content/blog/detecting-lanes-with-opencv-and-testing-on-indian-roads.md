---
title: "Detecting Lanes with OpenCV and Testing on Indian Roads"
description: "I am completely blown away by the fact that I get to be part of the one and only integrated course for a specific application by none other than the team at Udacity. It is quite hard to get into it…"
date: "2016-12-07T14:54:01.638Z"
categories: 
  - Self Driving Cars
  - Autonomous Vehicles
  - Computer Vision
  - Localization

published: true
canonicalLink: https://medium.com/computer-car/my-lane-detection-project-for-the-self-driving-car-nanodegree-by-udacity-36a230553bd3
---

![Photo by Aleksandr Kozlovskii on [Unsplash](https://unsplash.com/search/road?photo=Lr7n9IUBIiY).](./asset-1.jpeg)

## I’ll give an intro to the course and then we will talk about the first project we implemented which was to detect the lane lines using computer vision from a dashboard camera recording of a car driving on the highway.

I am completely blown away by the fact that I get to be part of the one and only integrated course for a specific application by none other than the team at Udacity.

[**Self-Driving Car Engineer**  
_Groundbreaking curriculum, cutting-edge technology, globally-recognized expertise. Build the future, today. Only at…_www.udacity.com](https://www.udacity.com/drive "https://www.udacity.com/drive")[](https://www.udacity.com/drive)

It is quite hard to get into it as there is an application process and a 4:1 ratio of making it into it. Plus as more people are hearing about it, the number of people applying keeps going up. I am happy to be in the second cohort that started in November 2016.

<Embed src="https://www.youtube.com/embed/a6pDdS6sY2E?feature=oembed" aspectRatio={0.562} />

The video above talks about how we go about processing the input stream and the steps involved to build an image processing pipeline that gives just two lines as outputs — one left lane and one right lane.

![](./asset-2.jpeg)

Let’s go through them in more detail along with the code here, starting with a picture of a highway above.

![](./asset-3.jpeg)

The first thing we always do is to blur the image so that only truly contrasting parts of the picture stand out in the next step. This helps smooth out the overall numbers in the image matrix that defines this picture. The `kernel_size` is the amount of blur to be applied.

```
cv2.GaussianBlur(img, (kernel_size, kernel_size), 0)
```![](./asset-4.jpeg)

We apply the Canny Transform, which is a popular edge-detection algorithm. Here, it takes two threshold values to determine how little and how much change is acceptable to be considered a valid edge. This is an important parameter that we tweak to achieve the best possible results.

```
cv2.Canny(img, low_threshold, high_threshold)
```![](./asset-5.jpeg)

Not all of the edges are important to us, so we mask out most of the image and only keep the bottom part of the road in view.

![](./asset-6.jpeg)

This is the most important step, we use the Hough Transform to convert the pixel dots that were detected as edges into meaningful lines. It takes a bunch of parameters, including how straight should a line be to be considered a line and what should be the minimum length of the lines. It will also connect consecutive lines for us, is we specify the maximum gap that is allowed. This is a key parameter for us to be able to join a dashed lane into a single detected lane line.

```
cv2.HoughLinesP(img, rho, theta, threshold, np.array([]), minLineLength=min_line_len, maxLineGap=max_line_gap)
```![](./asset-7.jpeg)

Next we overlap these detected lines on our image to find out how well we are doing. Notice that it is detecting multiple lines on both sides and we just need one single line.

![](./asset-8.jpeg)

For this step I decided to use a straightforward way to determine which lane is the most relevant for us. For each of the left and right lane (based on slope) I find the longest line. This helps me determine a single most dominant line for both sides — marked in blue above.

![](./asset-9.jpeg)

Now if you check the video I have posted on YouTube above, you can see that as this algorithm is applied on each frame of the image, it jitters and moves between frames. Hence we apply a smoothing moving average on the detected position of the lines to make sure that we have a smooth and stable lane detected on both sides.

I have shared my code on GitHub:

[**paramaggarwal/CarND-LaneLines-P1**  
_CarND-LaneLines-P1 - Lane Finding Project for Self-Driving Car ND_github.com](https://github.com/paramaggarwal/CarND-LaneLines-P1 "https://github.com/paramaggarwal/CarND-LaneLines-P1")[](https://github.com/paramaggarwal/CarND-LaneLines-P1)

Further reading about the curriculum:

[**Term 1: In-Depth on Udacity’s Self-Driving Car Curriculum**  
_Udacity will be going deep on deep learning and computer vision._medium.com](https://medium.com/self-driving-cars/term-1-in-depth-on-udacitys-self-driving-car-curriculum-ffcf46af0c08 "https://medium.com/self-driving-cars/term-1-in-depth-on-udacitys-self-driving-car-curriculum-ffcf46af0c08")[](https://medium.com/self-driving-cars/term-1-in-depth-on-udacitys-self-driving-car-curriculum-ffcf46af0c08)

---

_If you enjoyed this post, please hit recommend! Follow me on Medium to know about my future projects. Thanks to_ [_Chetan Agrawal_](https://medium.com/@chetan1507) _from_ [_Sportzify_](http://sportzify.com/) _for helping me collect sample video data of the roads._
