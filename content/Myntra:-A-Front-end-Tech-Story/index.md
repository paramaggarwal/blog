---
title: "Myntra: A Front-end Tech Story"
description: "When I joined Myntra in 2013, our tech stack was a monolith of PHP speaking directly to MySQL. Much respect to this stack, it got us to a place where we could consider re-writing and re-architecting…"
date: "2017-01-24T14:49:36.205Z"
categories: 
  - React Native
  - React
  - Software Engineering

published: true
canonicalLink: https://medium.com/@paramaggarwal/myntra-a-front-end-tech-story-ded7d3626f6
---

## The following is an inside story of three big tech migrations that I witnessed here. They were completely horrifying while they happened. But without them, I don’t see how we could have got here.

_I am an employee as of this writing with Myntra, but these views are my own._

### Node.js

When I joined Myntra in 2013, our tech stack was a monolith of PHP speaking directly to MySQL. Much respect to this stack, it got us to a place where we could consider re-writing and re-architecting our stack — instead of most other startups that die.

Growth was staggering. Each huge sale would be a financial dream, but a tech nightmare. If the web traffic would grow beyond a point, the PHP stack would be waiting on so many backend DB requests that eventually it would stop accepting new requests from the web front-end. Which meant that the load-balancer would promptly remove that server from the pool of available servers. And such would start a chain reaction, eventually killing the entire stack. A reboot would then bring us back up.

How do you fix this? One way was to re-write the PHP stack to be async. Second was to interface with the DB via micro-services that handle their own scaling independently. But if you are anyways attempting a re-write, why not use a framework that makes async the default? We had two choices — Python Tornado or Node.js. But there was a silver lining with Node.js, browsers run JS, Node.js also runs JS — why not share some code between the two. Why not given a web-request let the browser and the server both be capable of handling it.

And hence was born the search page re-write project. The team worked hard to build a way so that business logic, as well as HTML templates could be written in discrete files and then be bundled into the front-end bundle as well as the server. Load times plumetted. You would open the page, and the server would render it for you. By the time you decided where to click next, the JS would have loaded, and as soon as you clicked, it simply made an AJAX call just for the data, and instantly the page would update and even animate for certain things.

But **it was terrifying** to switch to it. What if our SEO plummeted? What if we were wrong and at some magical number the server simply stops working? What if customers don’t actually like the new design? What if revenue dips?

Today, these seem so small compared to the fact that the next sale we were able to do without any front-end bottlenecks like the one mentioned above. We made more money than those small losses we were afraid of hitting because of the change.

### Android and iOS App

Our story enters Jan 2014. We have an iPad app in the store, but we are not seeing strong uptake. Desktop website is as strong as ever. Mobile website is seeing ok uptake. Complete silence — nobody knows about the mobile app storm right around the corner.

We begin work on our Android app. An excellent design and engineering team is put together. Soon we hit a roadblock. For the first time we needed access to our APIs from an IP address that was not our datacenter — each customer could be making a request, it could be any IP address. How do we provide access but with the necessary authentication?

We build an API proxy on top of our internal micro-service layer that validated things like only the correct user is able to access their info, irrespective of the auth on the app side.

Work on the iOS app also started. With the Android app having a head start, the iOS app glided through using the same APIs that were now built. Engineers were few, but the team was excellent and both the apps shipped soon after.

But was it to be so smooth? **It was terrifying.** For the first time, we were launching a completely new platform for shopping with us. What if something went wrong in the app, and we DDOS our own servers in error? What if we ship the wrong code out and some users never update their app? SEO? We are dead right? Google will never find us. People will never know about what is there inside our app. Our app is too big! Who is going to install it! Why!?

Today, you know. Myntra went mobile-only soon after. It was insane but totally worth it — it was a huge shift internally, people were focussed to think purely about how do we build this feature on the mobile app? All superfluous discussions of also putting in the effort of making it on the desktop were put to an end. We were a focussed team. We need to ship for our mobile apps. Period. Growth soared, we were acquired. Soon after it was safe to assume we had won the fashion vertical in India.

### React Native

Cut to Feb 2015. Rumours are swirling about this thing Facebook has been working on. It allows one to make native apps, but with JavaScript? What sorcery!

The team works hard and gets private access to the project. It turns out to be sorcery indeed! Here is how it works: iOS ships with a JavascriptCore Engine that allows you to run JS and interact with it from Objective-C. It transparently converts say an Objective-C NSDictionary object to a native Javascript object.

In addition to that, it runs the UI layer as well as layout in native C. So while the business logic runs in JS, the UI remains performant as ever, like scrolling. No webviews to be seen on the horizon.

We build the homepage of the iOS app using React Native. WHAT? A new tech, a new framework — and we re-write the first screen people open on the app?

**It was terrifying.** What if all apps suddenly start crashing? What if our customers see bloated memory usage and decide enough is enough? What if we were all very wrong and native was always the best? What if Facebook stops developing the framework and leaves us out in the cold? How are we going to catch errors and debug? What are we thinking!?

We persevered. Today, more than half the iOS app and critical screens of the Android app use React Native. The homepage is soon going to share code between iOS and Android. We push bug fixes on the fly, it kicks in the next time the user opens the app. We ship new screens without the user ever having updated the app from the store. We develop much faster with instant refresh and hot-reloading. Design tweaks are a snitch with simple CSS tweaks and instant review thanks to hot-reloading again.

### Today

So, here we are today. Three terrifying migrations. All completely worth it. _Some things are worth doing._

---

Where do we go from here? Come join us, and be a part of the next wave.