---
title: "Intricacies of Traffic Sign Classification with TensorFlow"
description: "This technical post is the complete opposite of my original philosophical post about my experience with this project. Given a dataset of 30,000 traffic sign images with dimensions of 32x32, we are…"
date: "2017-01-31T09:36:39.833Z"
categories: 
  - Machine Learning
  - Neural Networks
  - Deep Learning
  - Artificial Intelligence
  - Self Driving Cars

published: true
canonicalLink: https://medium.com/computer-car/intricacies-of-traffic-sign-classification-with-tensorflow-8f994b1c8ba
---

## Diving into the technicalities of data pre-processing and visualization when classifying traffic sign images with convolutional neural networks. This gives upto 97.5% validation accuracy and 91.2% test accuracy.

_This technical post is the complete opposite of my_ [_original philosophical post_](https://medium.com/@paramaggarwal/neural-network-tuning-with-tensorflow-cc14a23f132c) _about my experience with this project._

### The Problem

Given a dataset of 30,000 traffic sign images with dimensions of 32x32, we are supposed to build a model that can predict these among 43 different possible sign types. We’ll start from scratch with a directly connected model, slowly introducing hidden layers and then eventually use a Convolution Neural Network. We’ll visualize how each change will affect our accuracy rates.

### Data Pre-processing

It is helpful to perform some mathematical operations on the input data to have it work well with the rest of the process.

#### One-hot Encoding

We generally encode the labels into an array with only one element set to `1`, this basically says that the probability of that occuring is 1, while others is `0`. We pair it with the `tf.nn.softmax_cross_entropy_with_logits()` method.

But, since TensorFlow 0.8, if we have a unique label for each label, then we can instead use `tf.nn.sparse_softmax_cross_entropy_with_logits()` which directly takes our labels array and is faster.

#### Histogram Equalization

A typical photo has the colours and brightness limited to a certain range. We can use this method to equalize the brightness levels of photos. I like to convert the image to grayscale and then apply a histogram normalization.

```
import cv2

bw = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
equ = cv2.equalizeHist(bw)
```![Visualization of black and white and histogram equalized versions compared to original.](/img/1*pHyGGDIGjOryJFyHHAB9EQ.png)

#### Normalisation

Generally we normalize the input colour values down to -0.5 to +0.5 compared to the original of 0 to 255. Here, it is more important that the mean be around 0. It is ok to go from -1 to +1 also. Don’t do `x_train = (x_train — 128.0) / 255.0`, as this is not as good as doing `(x_train / 255.0) — 0.5`. Very subtle difference, but makes much more sense. You can even go ahead and do `(x_train — np.mean(x_train)) / 255.0` if you are feeling adventurous.

With more trial and error, I saw best performance by letting the values run between -128 and +128. Hence, my solution simply does `x_train — np.mean(x_train)`to normalize the data. I believe this is related to losing fidelity because of forcing the input to lie in a very tiny range of -0.5 to 0.5. Let me know if you have experienced otherwise.

I think the key is to have a mean close to 0. Regarding min and max values I have seen different people recommend different things so you should try some variations.

### Data Augmentation

There are three reasons to generate more data by augmenting it.

1.  We want to have more data to train with, this always helps.
2.  We want data with variations on rotation and translation so that the model can generalize better and be agnostic to specific positioning of the sign.
3.  Also, certain classes are under-represented in the data, by augmenting and adding data, we can give more samples to these minorities.

![](/img/1*oHPth2wN-CJzbVwIPqKdSA.png)![We want to equalize the representation of classes in our data. \[Before/After\]](/img/1*X3waH4jxI6IFy-ChDoucjg.png)

#### Translation

I was initially translating the images within +-5 pixels which I later learned were too much for the capabilities of my model. We need much larger convolution layers if we want to make it very agnostic to position of the sign. Currently, the model expects a cropped version of the sign, so I only translate +-2 pixels, which is still quite a bit given image sizes of 32x32.

```
scipy.ndimage.interpolation.shift(image, [random.randrange(-2, 2), random.randrange(-2, 2), 0])
```

#### Rotation

A similar realization struck me once I visualized my augmentations. I was rotating +-20 degrees, which is too much! I eventually reduced this to just be +-10 degrees.

```
scipy.ndimage.interpolation.rotate(image, random.randrange(-10, 10), reshape=False)
```![](/img/1*9KlZvNg5gf6pL8c_oHZhrQ.png)

### Neural Network

This is what we are here for! Let’s get to the main course. I logged the performance of my network for each change I made, now I get to share it with you!

![Before I corrected my over-augmentation of data, this is what I started with.](/img/1*5wypraMewwdNUOT39d7oeg.png)

First let’s look at my experimentation with having a basic neural network with just a single hidden layer. As you can see above, even flattening and connecting the image data to output directly gives you are baseline of 70%! Once we add a hidden layer, we start overfitting — even a dropout doesn’t help. By continuously reducing the width of the hidden layer, we get good results at around 48 neurons. I brief experimentation with adding another layer also didn’t so much benefit.

While I was doing this, I added visualisation to my augmented data and realized that I was translating and rotating them a bit too much. After being more conservative while augmenting the images, we begin our journey.

![After correcting the over-augmentation, we begin to see nice accuracy, with very basic networks!](/img/1*-vi19j9WZrFBV002nFhuVQ.jpeg)

You can immediately see that the directly connected model jumps from 70% to 85% after being more conservative about augmenting the data. I quickly try the variation with a single hidden layer and we are already above 90% — this is going great!

I also experiment with going overboard on the hidden layer, but keeping it in control with a dropout of 0.5 — this also gives good results. But trying to add one more hidden layer wasn’t very helpful.

At this point, we now look towards adding convolution layers to our model to try to move into the 95% territory. This is when I realized I stepped on burning coal.

![Trying to get the convolution layer depths right.](/img/1*EZVCrx26s-ImqNH3MwT2Pw.png)

First I tried out different depths for the convolution layers. I noticed that smaller depths actually helped the network.

![Making the fully connected layers work right.](/img/1*G8sWDM_Hz2OTfuMpWEL3GA.png)

Here again, I learned that smaller layer width actually helped the network. If the layer width gets too high, we could try to improve it by using dropouts, but a smaller network is probably going to generalize better than a large one with dropouts.

![I think I want to die.](/img/1*qQuPiqjLN3J7C6GrOxpApA.png)

I went crazy by this point, nothing I would do would push me into the 90% range. I wanted to cry. A basic linearly connected model was giving me 85% and here I am using the latest hotness of convolution layers and not able to match.

I took a nap.

The next day, I approached this differently. I tried to run my network without my pre-processing and augmentation steps, and it did better on a standard LeNet model. I tweaked my normalization steps and realized that forcing input to be in -0.5 to +0.5 range was actually hurting it a lot! So I immediately made it only be in the -128 to 128 range and I was quickly friends with the 90% circle. Success!

![](/img/1*EnrXaMtun9m5Hv8zeqw3Gw.png)

Here is my final model. I am surprised how tiny it is! A small amount of dropout adds redundancy to the fully connected layers making an interpretation of the input. Again, the widest this network goes is 128 — that’s so awesome!

### Visualization

Use matplotlib’s `subplot()` function to be able to render images side by side for comparison. This helped me a lot in being able to make grid’s of visualizations for comparing augmented versions of images.

Also, visualize the confusion matrix on the test set. Notice that the model is weak at learning the classes in the 0 to 10 range. With this understanding, we can dig deeper and maybe add more training data in that dataset.

![](/img/1*4pQZhNJ7_NfkXXs2yQxFbw.png)

Pick out some random images from your test set and visualize the output of the neural network. What we are looking for are singular peaks that say that the model is confident about a particular class. Unfortunately, our model can’t decide what it wants for lunch. In most cases, it is predicting upto 3 different classes for each input. Very indecisive.

![](/img/1*uHcYtfdi0lbMkk1IVTfmHg.png)

While I haven’t tried it out yet, use of TensorBoard is recommended. I look forward to using it in a future project. This will help us visualize the weights while training as well as the convolution filters.

Display the time taken for each Epoch to understand the complexity of your network. My network just takes 5 seconds on an AWS GPU and 35 seconds on my quad-core MacBook Pro. Use smaller epoch counts when tuning, as you can get a general idea of the performance within the first three epochs.

### Conclusion

Made it alive on the other side of the burning coal. My feet hurt, but I am better prepared to face neural networks now. No fear.

I have shared the code and model on GitHub:

[**paramaggarwal/CarND-Traffic-Sign-Classifier-Project**  
_CarND-Traffic-Sign-Classifier-Project - Classify Traffic Signs._github.com](https://github.com/paramaggarwal/CarND-Traffic-Sign-Classifier-Project "https://github.com/paramaggarwal/CarND-Traffic-Sign-Classifier-Project")[](https://github.com/paramaggarwal/CarND-Traffic-Sign-Classifier-Project)

---

_Much thanks to_ [_Mehdi Sqalli_](https://medium.com/@MSqalli)_’s_ [_project code_](https://github.com/MehdiSv/TrafficSignsRecognition/blob/master/final_Traffic_Signs_Recognition.ipynb)_,_ [_Vivek Yadav_](https://medium.com/@vivek.yadav)_’s_ [_project code_](https://github.com/vxy10/p2-TrafficSigns/blob/master/Traffic_signs_Col_val_final2.ipynb) _and_ [_Jeremy Shannon_](https://medium.com/@jeremyeshannon)_’s_ [_project code_](https://github.com/jeremy-shannon/CarND-Traffic-Sign-Classifier-Project/blob/master/Traffic_Sign_Classifier.ipynb) _for this project that guided me to do better and inspired me to share my learnings like they did._
