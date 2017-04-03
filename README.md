# React-redux app backed by rails json api

Social network that using react and redux for frontend and rails for
backend.

Here demo on heroku: https://rails-redux-app.herokuapp.com/#/

## Frontend
React is used to build SPA UI with redux to control state tree.
Webpack packs all frontend into bundle.js in public/js directory.
Also I using Material-ui to dezign UI.

## Backend
Rails server will give html file if you don\`t have it. It will upload
bundle.js with all frontend. After that it\`s gonna work like JSON api server to work with flow of data.

## Deploing
Firstly run ```bundle install``` in root directory to upload gems.

This app uses postgresql. Make sure you have configurated your
```database.yml``` file to work with it.

To create database run ```rake db:setup``` in root directory.
If you want, you can use seed.rb to populate your db. To do it,
run ```rake db:seed``` in root directory.

To run server use ```rails s``` command.

I have already generated bundle.js(I need it to make deploying on heroku easy), but if you want to do it, you need:

1. Run ```npm install``` in frontend directory to load all npm packages.
2. Run ```npm run build``` in frontend directory to generate bundle.js.

Make sure you have the newest version of nodejs.
