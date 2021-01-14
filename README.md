# newsclip-assessment
Assessment for Newsclip


# Tech Stack
Database - MySQL - Hosted on Heroku
API - Node.js with Express.js package for routing
Front End - React.js with css in js


# Set up
Pull the repo to a local directory
Make sure that node.js (minimum version 12) is installed on your machine
On Windows a bash terminal is needed. Default terminal in Linux/Mac is fine as is
Install yarn via the terminal

Navigate to the nca-back directory and execute yarn install or npm install
Execute command yarn run dev to start server
In a seperate terminal session navigate to the nca-front directory and yarn install
Execute yarn run to launch app

Note that the install commands is not to intall the app on a device, as it is a web app. 
The install commands simply act to install the packages used to build the app

No set up for the database is required as it currently points to a database hosted on heroku

A tab in your default browser will open up with the app, if not, navigate to http://localhost:3000/


# App Use
There are two pages, Models and Variants

Variants lists all variants and gives the user the ability to add new variants to the database
Models has the vehicle models, and stock levels per variant for that model.
Models also gives the user the ability to add new models and add new variants to existing models

In the repo there are screenshots showing the pages

# Current Status
Inprogress of rewriting the API in Golang with a Postgres backend
