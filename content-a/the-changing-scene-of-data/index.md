---
title: "The Changing Scene of Data"
description: "Each and every day, we are posting updates to social networks, taking pictures, bookmarking websites and uploading digital content. Imagine if all this data was stored in the form of files on your…"
date: "2016-02-20T14:00:18.475Z"
categories: 
  - Cloud Storage
  - Operating Systems
  - Data Management

published: true
canonicalLink: https://medium.com/@paramaggarwal/the-changing-scene-of-data-e89550de947d
---

Each and every day, we are posting updates to social networks, taking pictures, bookmarking websites and uploading digital content.

Imagine if all this data was stored in the form of files on your disk. A folder called tweets, with a list of text files each containing one of your tweets. A folder called Facebook, with subfolders for your friends, and further subfolders for their status updates, their photos, what they shared and liked. Another parent folder called Google, with subfolders for every possible search query and inside each a list of text search results for each query.

Crazy.

This is how it would have been if we hadn’t moved over from the traditional file system. We sure have come a long way. What started out as just a simple folder/file structure to handle documents and programs has now grown into a plethora of different filesystems, databases and even cloud services where we don’t even know in what form the data is stored. (Any idea how is Google’s index actually stored?)

My friend [Divij Vaidya](https://twitter.com/divijvaidya/) recently asked on Quora — [What are the alternative solutions to folder based navigation/browsing of data on our systems?](http://t.umblr.com/redirect?z=http%3A%2F%2Fwww.quora.com%2FFile-Systems%2FWhat-are-the-alternative-solutions-to-folder-based-navigation-browsing-of-data-on-our-systems&t=ZDQwY2Y1MDA5MzMzYmQzMTI5ZTc0Y2M0MzRkNGMzMjNiNjU3ODc4NixnQ096ZW9GSA%3D%3D) — and it got me thinking. I noticed a trend that websites and mobile devices are now inspiring core architectural changes on traditional operating systems.

On traditional computing devices, there is one common data store, the filesystem. Apps are also just fragments of the same. I look for the data that I want to act upon and the OS calls the app that is able to handle it.

On mobile devices, each app has its own data store. Hence offering the flexibility to store the data in what form suits best the data. I look for the app that satisfies my purpose, and behind the scenes, this app loads the data required for the task.

On websites, each app is connected to a variety of data stores, and is truly hybrid in terms of data storage. Developers choose the best storage method that will fit their service. But again, we visit the website depending on the task at hand. We are not necessarily thinking in terms of the data.

Creating a new status update isn’t like thinking I want to create a new document. It is more like, oh, I want to tell my friends something. Next you think about whether Twitter is more suitable or Facebook, but you are not thinking in which folder should I create this text file.

Hence the focus has shifted from the data (the target) to the apps (the task). Your mind is thinking not what data you want to change, but what do you actually wish to accomplish.

Data is now defined by the entity that manages it. Foursquare manages all the data about my check-ins and stores it. But I can access it anytime via their API. They manage the data. Google has built a large index of websites. They handle the data. I manipulate and access their data through their service.

In the near future, I see the file system being completely hidden away. No Windows Explorer or Finder to navigate through. Apple is already pushing very hard in this direction with its latest release of OS X. Windows 8 also has a focus on apps, and not the file system.

Finally I can think about what I want to do rather than what file, in what folder, do I need to edit.

---

_Originally published at_ [_paramaggarwal.com_](http://paramaggarwal.com/post/29530369206/the-changing-scene-of-data)_._