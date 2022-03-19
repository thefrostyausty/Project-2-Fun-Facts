////////////////////
//  Dependencies  //
////////////////////
require("dotenv").config() // make env variables available
const express = require("express")
const middleware = require('./utils/middleware')
const FactsRouter = require('./controllers/facts')
const UserRouter = require('./controllers/user')
const JournalRouter = require('./controllers/journals')
const User = require("./models/user")
// how to call API fetch
const fetch = require("node-fetch")

// SEE MORE DEPENDENCIES IN ./utils/middleware.js
// user and resource routes linked in ./utils/middleware.js

//////////////////////////////
// Middleware + App Object  //
//////////////////////////////
const app = require("liquid-express-views")(express())

middleware(app)

////////////////////
//    Routes      //
////////////////////
// when you get a URL pattern that says /auth I want ypu to use USERROUTER
app.use('/auth', UserRouter)
// when you get a URL patter that says /facts I want you to use FACTSROUTER
app.use('/facts', FactsRouter)
// when you get a URL pattern that says /journal I want you to use JOURNALROUTER
app.use('/journals', JournalRouter)
// anything in server js will be seen as 'local host 3000'
// no need to even say '/facts'

app.get('/', (req, res) => {
	// this is how to make an API fetch
	fetch('https://api.aakhilv.me/fun/facts')
	.then(function (responseData) {
		return responseData.json();
	})
	.then(function (jsonData) {
		console.log('this is the data', jsonData);
		console.log('made the API fetch request', jsonData)
		
		const { username, userId, loggedIn } = req.session
		res.render('index.liquid', {jsonData, loggedIn, username, userId })
	});

	})

app.get('/error', (req, res) => {
	const error = req.query.error || 'This Page Does Not Exist'
	const { username, loggedIn, userId } = req.session
	res.render('error.liquid', { error, username, loggedIn, userId })
})

// if page is not found, send to error page
app.all('*', (req, res) => {
	res.redirect('/error')
})



//////////////////////////////
//      App Listener        //
//////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`)
})