---
title: "How Websites Evolved Back to Static HTML/CSS/JS Files"
description: "Everyone likes to talk about the good old days of simply being able to create a new file with a .html extension and start making a website instead of how we do it today — setting up a highly complex…"
date: "2019-05-28T16:19:17.973Z"
categories: 
  - JavaScript
  - Web Development
  - React
  - Gatsbyjs
  - HTML

published: true
canonicalLink: https://medium.com/@paramaggarwal/how-websites-evolved-back-to-static-html-css-js-files-57ce549f81db
---

![Photo by [Hal Gatewood](https://unsplash.com/photos/tZc3vjPCk-Q?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/website?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](./asset-1.jpeg)

## Or, the JAM stack.

Everyone likes to talk about the good old days of simply being able to create a new file with a .html extension and start making a website instead of how we do it today — setting up a highly complex build system to get anywhere near to a basic hello world project.

### The HTML Era

HTML (Hyper-text Mark-up Language) itself was simply a way to _mark_ text and specify the styling and treatment of text. You could technically publish text as is online. But you could really go places by _marking_ up a specific part of your text as an _anchor_ and then being able to click that and open another document!

We were not satisfied with the basic capabilities like **bold** and _italics_ so we built CSS. Now, we wanted to modify some parts of the HTML/CSS in response to things like clicking things, so we implemented a scripting language to quickly specify such relations and have then run within the browser itself instead of a round trip to the server.

But the key point here is that the way we developed our site was still about having multiple files open and writing the HTML/CSS and JS separately. Even deployment extended further by simply hosting these files on a static file server like Apache.

### The PHP Era

Overtime, we were still not happy with the ability to _markup_ text (HTML), ability to style this markup (CSS) and even be able to script small behaviours to this (JS) — we wanted to serve a different HTML to different people!

And so was born PHP, it feels like a natural extension to HTML itself. You write your code between your HTML file itself and then be able to run those parts on the server, which further generate HTML and the final HTML gets send to the browser.

This was extremely powerful. We could serve completely different pages to different users even though all of them access the same URL like Facebook. We could use a database on a server and store some data there, then based on some conditions use this data to modify the generated HTML and technically have an infinite number of pages available to serve (e-commerce).

### The Dark Age

Somewhere on this path to render pages on the fly (SSR) and render pages on the client (SPA) we forgot about the performance of our webpages. We were trying to build apps. But the web is about presenting content first and foremost!

We built large front-end frameworks to do everything on the client itself. But then we also ported those JS engines to the server so that we could run the same code on the server as well.

We built complex build and language transpilation tools to make sure that the differences of so many environments are abstracted away so that we can run the same code everywhere.

On the one hand we were stuck scaling these servers while on the other hand we were showing users blank white pages till all the JS had downloaded and they were ready to see the content.

To solve this, we decided to do both! We would render the page on the server first, then serve the JS, then the JS would take over and run on the client only. Nice! Congrats — you have now shipped your server-side code to each and every user for them to run it in their browser.

Even if a small part of your page is interactive, the logic to render the entire page is shipped to the client and any subsequent pages that would render.

### **The JAM Stack**

Javascript, APIs and Markup — this stack is all about finding middleground from the chaos of SSR+SPA. It is about stepping back and asking yourself, what parts of my page change and what parts don’t change?

The parts that don’t change often are pre-rendered on the server and saved to static HTML files. Anything else is implemented in JS and run on the client using API calls.

This has the benefit of avoiding too much data transfer (like the hydration data for SSR) and finding a good tradeoff to shipping content on the web.

But even more importantly, this allows you to leverage the power and cost oF CDNs to effectively serve your content. And with serverless apps, your APIs will never need a server to SSH into and manage.

### Conclusion

I find it fascinating that we are back to generating separate HTML/CSS and JS files and then putting them on a static file server — the CDN. It has been a decade long effort and as we come back to where we started, I feel like we are at a whole another level (a spiral?).

At the end of the day, the output remains the same, but we have much more sophisticated tooling similar to many other things in life. Imagine the complexity involved in converting your voice into bits and transmitting it over a combination of wires and air spectrum to reach the other person contrary to the past where we would just travel and meet people. Over time the outcome remains the same, but by introducing complexity and then effectively abstracting it away, we are able to accomplish things indistinguisable from magic.

---

_I wrote this for my newsletter:_

<Embed src="https://buttondown.email/param?as_embed=true" height={200} width={600} />