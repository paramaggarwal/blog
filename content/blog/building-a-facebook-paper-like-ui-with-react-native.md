---
title: "Building a Facebook Paper-like UI with React Native"
description: "One of the myths people form about React Native when you tell them about it is that it would be slow. This is because typically one would go about explaining “it allows you to build yours apps in…"
date: "2016-07-21T19:06:12.853Z"
categories: 
  - React
  - React Native
  - Design
  - Interaction Design
  - UI

published: true
canonicalLink: https://medium.com/the-react-native-log/building-a-facebook-paper-like-ui-with-react-native-4a753623d343
---

## I built a working copy of the open-close cards carousel from the original Facebook Paper app as a technical demo. It uses the Animated library and React Native.

---

One of the myths people form about React Native when you tell them about it is that it would be slow. This is because typically one would go about explaining “it allows you to build yours apps in Javascript”, from which people conclude that its Javascript as in a web-browser’s javascript.

But the truth is that it’s all native interface elements. Elements of the native UI SDK of Android and iOS are instantiated each time you build a UI with React Native. Hence the view heirarchy remains light weight compared to a heavy DOM heirarchy.

What follows is a look into how I went about building a basic copy of one of the key interactions from the Facebook Paper app. The ability to zoom in and out of a carousel of cards and be able to stop the animation while it is in progress.

Here is what it looks like:

![](/img/1*-S3SagqC6isPtGzFh3JuUA.png)![Actual screenshots from the working demo.](/img/1*Mwt_AhbIPRr8-Hx9IWrQ5A.png)

The screenshots above are from what I have built. On the left is the list of cards currently zoomed out. You can swipe through them. You can also pull them up and have them go full screen. In which case, now you can paginate through them full screen, one by one. Compare this with a similar interaction model on Facebook Paper below.

![The zoomed out carousel of cards at the bottom.](/img/1*TtJNj6_ux3kTzicf9i1glQ.jpeg)A video showcasing the original interactions of the app. See the 1:15 mark.

It starts with instantiating two state variables. One to store the pan values and another to store progress of the docking animation from 0 to 1. This progress variable is interpolated based on the pan values.

```
let pan = new Animated.ValueXY();
this.state = {
  pan: pan,
  dockAnimation: pan.y.interpolate({
    inputRange: [-300, 0],
    outputRange: [0, 1],
  })
}
```

Now we need to create a panResponder. This is a sophisticated gesture handling concept with various methods that determine when the geture should activate and events on their completion. In our case, we want to track when the gesture is in progress and when it ends.

```
this._panResponder = PanResponder.create({
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
  onMoveShouldSetPanResponder: (evt, gestureState) => true,
  onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
  onPanResponderGrant: () => {},
  onPanResponderMove: Animated.event([null, {dx: this.state.pan.x, dy: this.state.pan.y}]),
  onPanResponderRelease: (evt, gestureState) => {
    // dragging stopped, animate the item to the correct position 
  }
})
```

Refer to the actual code to see the full implementaion of the onPanResponderRelease block. It basically deals with first figuring out whether the user has dragged far enough to actually toggle the state. If yes, it animates this movement.

```
transform: [{
  scale: this.state.dockAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.5],
  })
}
```

A multitude of transforms are applied as a style to the ListView. I have shown the scale transform as an example. Here again we use the concept of an interpolation to control the animation.

```
<AnimatedListView
  style={this.getListViewStyle()}
  {...this._panResponder.panHandlers}
/>
```

Finally, the styles and the panHandlers from the panResponder are all hooked up to the ListView. Note that an a composed version of the ListView was created as AnimatedListView so that the Animated library can parse out the animatable values from the style object.

That’s all there is to be done for the animations! The rest is using flex-box layouts to build those beautiful cards. Jason Brown has written a nice book about the Animated library in React Native: [http://browniefed.com/react-native-animation-book](http://browniefed.com/react-native-animation-book)

I have shared all the code on Github. Feel free to hack away!

[**paramaggarwal/rn-paper-interface**  
_rn-paper-interface - Implementation of Facebook Paper-like interactive UI in React Native._github.com](https://github.com/paramaggarwal/rn-paper-interface "https://github.com/paramaggarwal/rn-paper-interface")[](https://github.com/paramaggarwal/rn-paper-interface)

<Embed src="https://player.vimeo.com/video/175727390" aspectRatio={1.778} />

_Currently I ran this only on iOS. But you can attempt to run this on Android and open a PR on the repo. I don’t seem to have used any iOS specific APIs, so theoretically, it should work on Android too!_
