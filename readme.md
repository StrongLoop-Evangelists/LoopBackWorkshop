LoopBack Workshop
===

This repository contains examples and slides from my LoopBack workshop. The slides are not
going to be terribly useful without me speaking, so be sure to watch the recording first. 

Recorded Version
---

*The NCDevCon recording URL will be posted here as soon as I get it...*

Exercises
===

In these exercises, you will build a simple Guestbook and iterate over multiple versions of different updates and features.

ex1/
---

In exercise one, you should create a new LoopBack application. Call it guestbook and accept all the defaults. Use the "Notes" db sample application so you have the in-memory datasource by default.

ex2/
---

In exercise 2, you'll create a model for the guestbook. I called my model `post` and created these properties:

* name (string, required)
* email (string, required)
* message (string, required)
* created (date, required)

*Note - in the recorded presentation, I used `posted` instead of `created`. I also made every property optional.*

ex3/
---

In this version, you can hook up the app to a Mongo database. You will need to have Mongo installed and create a database, and then install the connector:

	npm install loopback-connector-mongodb --save

You then need to add a new datasource and update `server/model-config.json` to tell LoopBack to make use of the database. 

*Because of time, I did not go through the Mongo setup in the recorded presentation. My recommendation is to keep the guestbook in the memory database instead. That's what I did in the recorded version.*

ex4/
---

In this exercise, we build a front end. This is a multi-step process. We want to tell the LB app to use the `client/` folder as a static directory. First you need to edit `server/middelware.json` file and change the `files` part to this:

	"files": {

    	"loopback#static": {
      	"params": "$!../client"
    	}

	},

This will tell LoopBack to look in `client` when it can't process a route. But LoopBack already has a route set up for `/`. Go into `server/boot/root.js` and simply comment out this line:

	router.get('/', server.loopback.status());

The front end makes use of jQuery to do a GET on the API to load guestbook posts and a POST to create a new one.

ex5/
---

This version simply adds sorting and limiting to the GET request. This support is all baked into LoopBack.

ex6/
---

This update adds a default for the `created` property.

ex7/
---

This version makes use of remote hooks to help sanitize input. It strips out HTML from properties and prevents you from sending `created` as a property.

ex8/
---

This adds a bit of security by preventing folks from updating or deleting posts.